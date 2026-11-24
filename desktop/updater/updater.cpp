// stlware-updater: applies a downloaded update after STLware has closed.
//
// The app downloads only the files that changed into a staging folder, writes a plan and starts a
// copy of this program with the plan's path. The plan is UTF-8 text, one step per line, tab separated:
//   wait    <pid>              wait until the app has exited
//   copy    <from> <to>        replace a file of the installation (the old one is kept until all steps worked)
//   delete  <path>             remove a file that the new version no longer has
//   launch  <exe>              start the updated app
// If any copy fails, every replaced file is put back and the old version starts again.

#include <chrono>
#include <cstdio>
#include <filesystem>
#include <fstream>
#include <sstream>
#include <string>
#include <thread>
#include <vector>

#ifdef _WIN32
#include <windows.h>
#include <shellapi.h>
#else
#include <signal.h>
#include <unistd.h>
#endif

namespace fs = std::filesystem;

namespace {

std::ofstream logFile;

void log(const std::string &line) {
    if (logFile) logFile << line << std::endl;
}

fs::path pathFromUtf8(const std::string &s) {
#if defined(__cpp_char8_t)
    return fs::path(std::u8string(s.begin(), s.end()));
#else
    return fs::u8path(s);
#endif
}

std::string utf8(const fs::path &p) {
    auto u = p.u8string();
    return std::string(u.begin(), u.end());
}

void waitForExit(long pid) {
#ifdef _WIN32
    HANDLE h = OpenProcess(SYNCHRONIZE, FALSE, DWORD(pid));
    if (h) {
        WaitForSingleObject(h, 60000);
        CloseHandle(h);
    }
#else
    for (int i = 0; i < 600 && kill(pid_t(pid), 0) == 0; i++) std::this_thread::sleep_for(std::chrono::milliseconds(100));
#endif
    std::this_thread::sleep_for(std::chrono::milliseconds(300));
}

/** Retry for a while: antivirus scanners and Explorer can hold a file for a moment. */
template <typename F> bool retry(F &&f) {
    for (int i = 0; i < 60; i++) {
        std::error_code ec;
        if (f(ec)) return true;
        std::this_thread::sleep_for(std::chrono::milliseconds(250));
    }
    return false;
}

void launch(const fs::path &exe) {
#ifdef _WIN32
    ShellExecuteW(nullptr, L"open", exe.wstring().c_str(), nullptr, exe.parent_path().wstring().c_str(), SW_SHOWNORMAL);
#else
    if (fork() == 0) {
        execl(exe.c_str(), exe.c_str(), (char *)nullptr);
        _exit(1);
    }
#endif
}

void showError(const std::string &message) {
#ifdef _WIN32
    int n = MultiByteToWideChar(CP_UTF8, 0, message.c_str(), -1, nullptr, 0);
    std::wstring w(n, L'\0');
    MultiByteToWideChar(CP_UTF8, 0, message.c_str(), -1, w.data(), n);
    MessageBoxW(nullptr, w.c_str(), L"STLware update", MB_OK | MB_ICONWARNING);
#else
    std::fprintf(stderr, "%s\n", message.c_str());
#endif
}

struct Step {
    std::string kind;
    std::vector<std::string> args;
};

int run(const fs::path &planPath) {
    logFile.open(planPath.parent_path() / "update.log", std::ios::app);
    std::ifstream in(planPath, std::ios::binary);
    if (!in) {
        showError("The update plan is missing. STLware was not changed.");
        return 2;
    }
    std::vector<Step> steps;
    std::string line;
    while (std::getline(in, line)) {
        if (!line.empty() && line.back() == '\r') line.pop_back();
        if (line.empty()) continue;
        Step s;
        std::stringstream ss(line);
        std::string part;
        bool first = true;
        while (std::getline(ss, part, '\t')) {
            if (first) s.kind = part, first = false;
            else s.args.push_back(part);
        }
        steps.push_back(s);
    }

    const fs::path backup = planPath.parent_path() / "backup";
    std::error_code ec;
    fs::remove_all(backup, ec);
    fs::create_directories(backup, ec);
    std::vector<std::pair<fs::path, fs::path>> replaced; // original location, backup copy
    std::vector<fs::path> added;
    fs::path launchExe;
    bool ok = true;

    for (const Step &s : steps) {
        if (s.kind == "wait" && s.args.size() == 1) {
            log("wait for " + s.args[0]);
            waitForExit(std::stol(s.args[0]));
        } else if (s.kind == "launch" && s.args.size() == 1) {
            launchExe = pathFromUtf8(s.args[0]);
        }
    }
    for (const Step &s : steps) {
        if (!ok) break;
        if (s.kind == "copy" && s.args.size() == 2) {
            const fs::path from = pathFromUtf8(s.args[0]), to = pathFromUtf8(s.args[1]);
            log("copy " + s.args[0] + " -> " + s.args[1]);
            fs::create_directories(to.parent_path(), ec);
            if (fs::exists(to)) {
                const fs::path keep = backup / std::to_string(replaced.size());
                if (!retry([&](std::error_code &e) { fs::rename(to, keep, e); return !e; })) {
                    log("  could not move the old file away");
                    ok = false;
                    break;
                }
                replaced.emplace_back(to, keep);
            } else {
                added.push_back(to);
            }
            if (!retry([&](std::error_code &e) { fs::copy_file(from, to, fs::copy_options::overwrite_existing, e); return !e; })) {
                log("  copy failed");
                ok = false;
            }
        } else if (s.kind == "delete" && s.args.size() == 1) {
            const fs::path p = pathFromUtf8(s.args[0]);
            log("delete " + s.args[0]);
            if (fs::exists(p)) {
                const fs::path keep = backup / std::to_string(replaced.size());
                if (retry([&](std::error_code &e) { fs::rename(p, keep, e); return !e; })) replaced.emplace_back(p, keep);
                else log("  could not delete (left in place)");
            }
        }
    }

    if (!ok) {
        log("rolling back");
        for (const auto &p : added) fs::remove(p, ec);
        for (auto it = replaced.rbegin(); it != replaced.rend(); ++it) {
            fs::remove(it->first, ec);
            fs::rename(it->second, it->first, ec);
        }
        showError("STLware could not finish the update (a file was in use). Your previous version was kept. Please try again.");
    } else {
        log("done");
        fs::remove_all(backup, ec);
    }
    if (!launchExe.empty()) launch(launchExe);
    return ok ? 0 : 1;
}

} // namespace

#ifdef _WIN32
int WINAPI wWinMain(HINSTANCE, HINSTANCE, PWSTR, int) {
    int argc = 0;
    LPWSTR *argv = CommandLineToArgvW(GetCommandLineW(), &argc);
    if (!argv || argc < 2) {
        showError("This program installs STLware updates and is started by STLware itself.");
        return 2;
    }
    fs::path plan(argv[1]);
    LocalFree(argv);
    return run(plan);
}
#else
int main(int argc, char **argv) {
    if (argc < 2) {
        showError("This program installs STLware updates and is started by STLware itself.");
        return 2;
    }
    return run(pathFromUtf8(argv[1]));
}
#endif
