#include "Zip.h"

#include "miniz.h"

#include <cstring>
#include <stdexcept>

namespace stlware {

struct ZipReader::Impl {
    mz_zip_archive zip;
    std::map<std::string, mz_uint> index;
};

ZipReader::ZipReader(const uint8_t *data, size_t size) : d(std::make_unique<Impl>()) {
    std::memset(&d->zip, 0, sizeof d->zip);
    if (!mz_zip_reader_init_mem(&d->zip, data, size, 0)) throw std::runtime_error("This file is not a valid 3MF (ZIP) package.");
    mz_uint count = mz_zip_reader_get_num_files(&d->zip);
    for (mz_uint i = 0; i < count; i++) {
        char name[1024];
        mz_zip_reader_get_filename(&d->zip, i, name, sizeof name);
        std::string n = name;
        if (!n.empty() && n[0] == '/') n.erase(0, 1);
        d->index[n] = i;
    }
}

ZipReader::~ZipReader() { mz_zip_reader_end(&d->zip); }

bool ZipReader::has(const std::string &name) const { return d->index.count(name) > 0; }

std::optional<std::string> ZipReader::read(const std::string &name) const {
    auto it = d->index.find(name);
    if (it == d->index.end()) return std::nullopt;
    size_t size = 0;
    void *p = mz_zip_reader_extract_to_heap(&d->zip, it->second, &size, 0);
    if (!p) return std::nullopt;
    std::string out(static_cast<const char *>(p), size);
    mz_free(p);
    return out;
}

std::vector<std::string> ZipReader::names() const {
    std::vector<std::string> out;
    for (const auto &[k, v] : d->index) out.push_back(k);
    return out;
}

std::vector<uint8_t> writeZip(const std::vector<std::pair<std::string, std::string>> &files) {
    mz_zip_archive zip;
    std::memset(&zip, 0, sizeof zip);
    if (!mz_zip_writer_init_heap(&zip, 0, 0)) throw std::runtime_error("Could not start the ZIP file.");
    for (const auto &[name, data] : files) {
        if (!mz_zip_writer_add_mem(&zip, name.c_str(), data.data(), data.size(), MZ_DEFAULT_COMPRESSION)) {
            mz_zip_writer_end(&zip);
            throw std::runtime_error("Could not write " + name + " to the ZIP file.");
        }
    }
    void *buf = nullptr;
    size_t size = 0;
    if (!mz_zip_writer_finalize_heap_archive(&zip, &buf, &size)) {
        mz_zip_writer_end(&zip);
        throw std::runtime_error("Could not finish the ZIP file.");
    }
    std::vector<uint8_t> out(static_cast<uint8_t *>(buf), static_cast<uint8_t *>(buf) + size);
    mz_free(buf);
    mz_zip_writer_end(&zip);
    return out;
}

} // namespace stlware
