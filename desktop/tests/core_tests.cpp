// Core tests: file formats. Run with ctest (or the stlware_tests binary).
#include "Model.h"
#include "Stl.h"
#include "ThreeMF.h"
#include "Zip.h"

#include "miniz.h"

#include <cmath>
#include <cstdio>
#include <cstring>
#include <fstream>
#include <functional>
#include <sstream>
#include <string>
#include <vector>

using namespace stlware;

static int failures = 0;
static int checks = 0;
#define CHECK(cond)                                                                    \
    do {                                                                               \
        checks++;                                                                      \
        if (!(cond)) {                                                                 \
            failures++;                                                                \
            std::fprintf(stderr, "  FAILED %s:%d: %s\n", __FILE__, __LINE__, #cond);   \
        }                                                                              \
    } while (0)

static void test(const char *name, const std::function<void()> &fn) {
    int before = failures;
    try {
        fn();
    } catch (const std::exception &e) {
        failures++;
        std::fprintf(stderr, "  FAILED %s: exception %s\n", name, e.what());
    }
    std::printf("%s %s\n", failures == before ? "ok  " : "FAIL", name);
}

static std::vector<uint8_t> readFile(const std::string &path) {
    std::ifstream f(path, std::ios::binary);
    return std::vector<uint8_t>((std::istreambuf_iterator<char>(f)), std::istreambuf_iterator<char>());
}

static std::vector<uint8_t> gunzip(const std::vector<uint8_t> &gz) {
    if (gz.size() < 18 || gz[0] != 0x1f || gz[1] != 0x8b) return {};
    size_t p = 10;
    int flags = gz[3];
    if (flags & 4) p += 2 + (gz[p] | gz[p + 1] << 8);
    if (flags & 8) while (gz[p++]) {}
    if (flags & 16) while (gz[p++]) {}
    if (flags & 2) p += 2;
    size_t outLen = 0;
    void *out = tinfl_decompress_mem_to_heap(gz.data() + p, gz.size() - p - 8, &outLen, 0);
    std::vector<uint8_t> res(static_cast<uint8_t *>(out), static_cast<uint8_t *>(out) + outLen);
    mz_free(out);
    return res;
}

static std::vector<uint8_t> bytes(const std::string &s) { return std::vector<uint8_t>(s.begin(), s.end()); }

static std::vector<uint8_t> make3mf(const std::string &model, const std::vector<std::pair<std::string, std::string>> &extra = {}) {
    std::vector<std::pair<std::string, std::string>> files = {
        {"_rels/.rels", R"(<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Target="/3D/3dmodel.model" Id="rel0" Type="http://schemas.microsoft.com/3dmanufacturing/2013/01/3dmodel"/></Relationships>)"},
        {"3D/3dmodel.model", model},
    };
    for (const auto &e : extra) files.push_back(e);
    return writeZip(files);
}

static const char *TETRA_VERTS = R"(<vertices><vertex x="0" y="0" z="0"/><vertex x="10" y="0" z="0"/><vertex x="0" y="10" z="0"/><vertex x="0" y="0" z="10"/></vertices>)";

// stlware_tests --dump <file.3mf>: triangle count, palette and colour use, to compare with the web editor.
static int dump(const char *path) {
    auto data = readFile(path);
    Model m = read3mf(data.data(), data.size());
    std::vector<size_t> counts(m.palette.size(), 0);
    for (auto c : m.colours) counts[c]++;
    std::printf("triangles %zu source %s objects %zu split %d\n", m.triangleCount(), m.source.c_str(), m.objectNames.size(), m.splitTriangles);
    for (size_t i = 0; i < m.palette.size(); i++) std::printf("%s %s %zu\n", m.palette[i].c_str(), m.names[i].c_str(), counts[i]);
    return 0;
}

int main(int argc, char **argv) {
    if (argc == 3 && std::string(argv[1]) == "--dump") return dump(argv[2]);
    test("paint codes", [] {
        CHECK(paintColorCode(1) == "4");
        CHECK(paintColorCode(2) == "8");
        CHECK(paintColorCode(3) == "0C");
        CHECK(paintColorCode(4) == "1C");
        CHECK(paintColorCode(0).empty());
        for (const char *code : {"4", "8", "0C", "1C", "48483", "1C1C0C8B", "0FC"}) {
            PaintTree t = decodePaint(code);
            CHECK(encodePaint(t) == code);
        }
        CHECK(decodePaint("1C").state == 4);
        CHECK(decodePaint("0FC").state == 18);
        CHECK(encodePaint(decodePaint("F0C")) == "0C"); // same results as the web editor (src/core/threemf.ts)
        PaintTree split = decodePaint("48483");
        CHECK(split.splitSides == 3 && split.special == 0 && split.children.size() == 4);
        CHECK(split.children[0].state == 1 && split.children[1].state == 2 && split.children[2].state == 1 && split.children[3].state == 2);
        PaintTree s2 = decodePaint("1C1C0C8B");
        CHECK(s2.splitSides == 3 && s2.special == 2 && s2.children[0].state == 4 && s2.children[3].state == 2);
        bool threw = false;
        try {
            decodePaint("3");
        } catch (...) {
            threw = true;
        }
        CHECK(threw);
    });

    test("ascii and binary stl", [] {
        std::string ascii =
            "solid t\n facet normal 0 0 1\n  outer loop\n   vertex 0 0 0\n   vertex 1.5 0 0\n   vertex 0 2.25e1 0\n  endloop\n endfacet\nendsolid t\n";
        auto soup = readStl(reinterpret_cast<const uint8_t *>(ascii.data()), ascii.size());
        CHECK(soup.size() == 9);
        CHECK(soup[3] == 1.5f);
        CHECK(soup[7] == 22.5f);
        auto bin = writeStl(soup);
        CHECK(bin.size() == 84 + 50);
        auto back = readStl(bin.data(), bin.size());
        CHECK(back == soup);
    });

    test("benchy stl", [] {
        auto gz = readFile(std::string(STLWARE_REPO) + "/public/samples/3dbenchy.stl.bin");
        CHECK(!gz.empty());
        if (gz.empty()) return;
        auto stl = gunzip(gz);
        CHECK(stl.size() == 11285384);
        Model m;
        m.positions = readStl(stl.data(), stl.size());
        CHECK(m.triangleCount() == 225706);
        auto b = m.bounds();
        CHECK(b[5] - b[2] > 40 && b[5] - b[2] < 60); // ~48 mm tall
    });

    test("3mf colour group", [] {
        std::string model = std::string(R"(<?xml version="1.0"?><model unit="centimeter" xmlns="http://schemas.microsoft.com/3dmanufacturing/core/2015/02"><metadata name="Application">STLware</metadata><resources>)") +
                            R"(<m:colorgroup id="5" xmlns:m="x"><m:color color="#ff0000FF"/><m:color color="#00FF00"/></m:colorgroup>)" +
                            R"(<object id="1" name="Tetra" type="model"><mesh>)" + TETRA_VERTS +
                            R"(<triangles><triangle v1="0" v2="2" v3="1" pid="5" p1="0"/><triangle v1="0" v2="1" v3="3" pid="5" p1="1"/><triangle v1="1" v2="2" v3="3"/><triangle v1="0" v2="3" v3="2" pid="5" p1="1"/></triangles></mesh></object></resources>)" +
                            R"(<build><item objectid="1" transform="1 0 0 0 1 0 0 0 1 5 0 0"/></build></model>)";
        auto z = make3mf(model);
        Model m = read3mf(z.data(), z.size());
        CHECK(m.triangleCount() == 4);
        CHECK(m.source == "3mf");
        CHECK(m.objectNames.size() == 1 && m.objectNames[0] == "Tetra");
        // filament 1 (uncoloured triangle) first, then the rgb colours in order of use
        CHECK(m.palette.size() == 3);
        CHECK(m.palette[0] == "#FFFFFF");
        CHECK(m.palette[1] == "#FF0000");
        CHECK(m.palette[2] == "#00FF00");
        CHECK(m.colours[0] == 1 && m.colours[1] == 2 && m.colours[2] == 0 && m.colours[3] == 2);
        auto b = m.bounds();
        CHECK(std::fabs(b[0] - 50) < 1e-4 && std::fabs(b[3] - 150) < 1e-4); // cm -> mm, after the transform
    });

    test("bambu painting with split triangles", [] {
        // Triangle 0 painted as a 4-way split: three corners filament 2, middle filament 3 (state 3 -> "0C").
        std::string paint = encodePaint([] {
            PaintTree t;
            t.splitSides = 3;
            t.children.resize(4);
            t.children[0].state = 2;
            t.children[1].state = 2;
            t.children[2].state = 2;
            t.children[3].state = 3;
            return t;
        }());
        std::string model = std::string(R"(<?xml version="1.0"?><model unit="millimeter"><metadata name="Application">BambuStudio-02.00</metadata><resources>)") +
                            R"(<object id="1" type="model"><mesh>)" + TETRA_VERTS +
                            R"(<triangles><triangle v1="0" v2="2" v3="1" paint_color=")" + paint +
                            R"("/><triangle v1="0" v2="1" v3="3"/><triangle v1="1" v2="2" v3="3" paint_color="8"/><triangle v1="0" v2="3" v3="2"/></triangles></mesh></object>)" +
                            R"(<object id="2" type="model"><components><component objectid="1"/></components></object></resources><build><item objectid="2"/></build></model>)";
        std::string settings = R"(<?xml version="1.0"?><config><object id="2"><metadata key="name" value="Painted"/><metadata key="extruder" value="1"/><part id="1" subtype="normal_part"><metadata key="extruder" value="0"/></part></object></config>)";
        std::string project = R"({"filament_colour": ["#111111", "#22AA22", "#3333ff"]})";
        auto z = make3mf(model, {{"Metadata/model_settings.config", settings}, {"Metadata/project_settings.config", project}});
        Model m = read3mf(z.data(), z.size());
        CHECK(m.source == "bambu");
        CHECK(m.splitTriangles == 1);
        CHECK(m.objectNames[0] == "Painted");
        CHECK(m.palette.size() == 3);
        CHECK(m.palette[0] == "#111111");
        CHECK(m.palette[1] == "#22AA22");
        CHECK(m.palette[2] == "#3333FF");
        // 4 leaves for the split triangle; neighbours with a midpoint on a shared edge are fanned to stay closed
        CHECK(m.triangleCount() > 4 + 3);
        size_t f3 = 0;
        for (auto c : m.colours) f3 += c == 2;
        CHECK(f3 == 1);
    });

    test("not a zip", [] {
        std::string junk = "hello";
        bool threw = false;
        try {
            read3mf(reinterpret_cast<const uint8_t *>(junk.data()), junk.size());
        } catch (const std::exception &) {
            threw = true;
        }
        CHECK(threw);
    });

    std::printf("%d checks, %d failed\n", checks, failures);
    return failures ? 1 : 0;
}
