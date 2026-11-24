#include "ThreeMF.h"

#include "Num.h"
#include "Xml.h"
#include "Zip.h"

#include <QByteArray>
#include <QJsonArray>
#include <QJsonDocument>
#include <QJsonObject>

#include <algorithm>
#include <array>
#include <cctype>
#include <cmath>
#include <functional>
#include <limits>
#include <map>
#include <memory>
#include <optional>
#include <regex>
#include <stdexcept>
#include <unordered_map>

namespace stlware {

const char *const DEFAULT_FILAMENT_COLOURS[16] = {"#FFFFFF", "#000000", "#E72727", "#2761E7", "#2BA84A", "#F2C200",
                                                   "#8E44AD", "#F28C28", "#7A4A2B", "#808080", "#FF8FB1", "#00B3B3",
                                                   "#C0C0C0", "#4B0082", "#9ACD32", "#800000"};

// ---------------------------------------------------------------------------
// Paint strings
// ---------------------------------------------------------------------------

std::string paintColorCode(int filament) {
    static const char *hexd = "0123456789ABCDEF";
    if (filament <= 0) return "";
    if (filament < 3) return std::string(1, hexd[filament << 2]);
    if (filament - 3 > 0xF) throw std::runtime_error("filament slot " + std::to_string(filament) + " is out of range");
    return std::string(1, hexd[filament - 3]) + "C";
}

PaintTree decodePaint(const std::string &code) {
    std::vector<int> nib;
    for (auto it = code.rbegin(); it != code.rend(); ++it) {
        char ch = *it;
        if (ch == ' ' || ch == '\t' || ch == '\r' || ch == '\n') continue;
        int v = (ch >= '0' && ch <= '9') ? ch - '0'
                : (ch >= 'a' && ch <= 'f') ? ch - 'a' + 10
                : (ch >= 'A' && ch <= 'F') ? ch - 'A' + 10
                                           : -1;
        nib.push_back(v);
    }
    size_t pos = 0;
    auto read = [&]() {
        if (pos >= nib.size() || nib[pos] < 0) throw std::runtime_error("paint string ended early");
        return nib[pos++];
    };
    std::function<PaintTree(int)> node = [&](int depth) -> PaintTree {
        if (depth > 32) throw std::runtime_error("paint string is too deep");
        PaintTree t;
        int c = read();
        int splitSides = c & 0b11;
        if (splitSides == 0) {
            if ((c & 0b1100) == 0b1100) {
                int extra = read(), runs = 0;
                while (extra == 0b1111) {
                    runs++;
                    extra = read();
                }
                t.state = extra + 15 * runs + 3;
            } else {
                t.state = c >> 2;
            }
            return t;
        }
        t.splitSides = splitSides;
        t.special = c >> 2;
        t.children.resize(splitSides + 1);
        for (int i = splitSides; i >= 0; i--) t.children[i] = node(depth + 1);
        return t;
    };
    return node(0);
}

std::string encodePaint(const PaintTree &tree) {
    std::vector<int> nibbles;
    std::function<void(const PaintTree &)> emitNode = [&](const PaintTree &n) {
        if (n.splitSides == 0) {
            int s = n.state;
            if (s < 3) {
                nibbles.push_back(s << 2);
            } else {
                nibbles.push_back(0b1100);
                s -= 3;
                while (s >= 15) {
                    nibbles.push_back(0b1111);
                    s -= 15;
                }
                nibbles.push_back(s);
            }
        } else {
            nibbles.push_back((n.special << 2) | n.splitSides);
            for (int i = int(n.children.size()) - 1; i >= 0; i--) emitNode(n.children[i]);
        }
    };
    emitNode(tree);
    static const char *hexd = "0123456789ABCDEF";
    std::string out;
    for (auto it = nibbles.rbegin(); it != nibbles.rend(); ++it) out += hexd[*it];
    return out;
}

namespace {

// Leaf triangles {a, b, c, state} of a painted triangle (TriangleSelector::perform_split).
void splitLeaves(std::array<int, 3> tri, const PaintTree &tree, const std::function<int(int, int)> &midpoint,
                 std::vector<std::array<int, 4>> &out) {
    if (tree.splitSides == 0) {
        out.push_back({tri[0], tri[1], tri[2], tree.state});
        return;
    }
    std::array<int, 3> v{tri[(tree.special) % 3], tri[(tree.special + 1) % 3], tri[(tree.special + 2) % 3]};
    std::vector<std::array<int, 3>> tris;
    if (tree.splitSides == 1) {
        int m12 = midpoint(v[2], v[1]);
        tris = {{v[0], v[1], m12}, {m12, v[2], v[0]}};
    } else if (tree.splitSides == 2) {
        int m01 = midpoint(v[1], v[0]);
        int m02 = midpoint(v[0], v[2]);
        tris = {{v[0], m01, m02}, {m01, v[1], m02}, {v[1], v[2], m02}};
    } else {
        int m01 = midpoint(v[1], v[0]), m12 = midpoint(v[2], v[1]), m20 = midpoint(v[0], v[2]);
        tris = {{v[0], m01, m20}, {m01, v[1], m12}, {m12, v[2], m20}, {m01, m12, m20}};
    }
    for (size_t i = 0; i < tris.size() && i < tree.children.size(); i++) splitLeaves(tris[i], tree.children[i], midpoint, out);
}

using Mat = std::array<double, 12>; // 3MF 3x4 row-vector matrix
const Mat IDENTITY{1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0};

double unitMm(const std::string &unit) {
    if (unit == "micron") return 0.001;
    if (unit == "centimeter") return 10;
    if (unit == "inch") return 25.4;
    if (unit == "foot") return 304.8;
    if (unit == "meter") return 1000;
    return 1;
}

Mat parseTransform(const std::string *text) {
    if (!text) return IDENTITY;
    Mat m{};
    std::string_view s(*text);
    size_t pos = 0;
    for (int i = 0; i < 12; i++) {
        double v;
        size_t used = parseNumber(s.substr(pos), v);
        if (!used || !std::isfinite(v)) return IDENTITY;
        m[i] = v;
        pos += used;
    }
    if (s.find_first_not_of(" \t\r\n", pos) != std::string_view::npos) return IDENTITY;
    return m;
}

/** Transform that applies a first, then b. */
Mat compose(const Mat &a, const Mat &b) {
    Mat out{};
    for (int r = 0; r < 4; r++) {
        for (int c = 0; c < 3; c++) {
            double s = 0;
            for (int k = 0; k < 3; k++) s += a[r * 3 + k] * b[k * 3 + c];
            if (r == 3) s += b[9 + c];
            out[r * 3 + c] = s;
        }
    }
    return out;
}

std::string hexColour(const std::string &colour) {
    std::string c;
    for (char ch : colour)
        if (ch != ' ' && ch != '\t' && ch != '\r' && ch != '\n') c += char(std::toupper(static_cast<unsigned char>(ch)));
    if (c.empty() || c[0] != '#') c = "#" + c;
    return c.size() >= 7 ? c.substr(0, 7) : "#808080";
}

struct RawMesh {
    std::vector<float> vertices;
    std::vector<int> triangles;
    std::vector<uint32_t> paintStart{0}; // paint string of triangle i = paint[paintStart[i], paintStart[i+1])
    std::string paint;
    std::vector<int> rawGroup; // per triangle: colour group number or -1
    std::vector<int> rawIndex;
    std::vector<int> colour; // resolved: index into ModelFile::colourTable or -1
    std::string paintOf(size_t i) const { return paint.substr(paintStart[i], paintStart[i + 1] - paintStart[i]); }
};

struct Ref {
    std::optional<std::string> path;
    std::string objectId;
    Mat transform;
};

struct ModelFile {
    double unitMm = 1;
    std::map<std::string, RawMesh> meshes;
    std::map<std::string, std::vector<Ref>> components;
    std::map<std::string, std::string> names;
    std::vector<Ref> build;
    std::string application;
    std::vector<std::string> colourTable;
};

std::string normPath(std::string p) {
    if (!p.empty() && p[0] == '/') p.erase(0, 1);
    return p;
}

/** Parse one .model file with the fast tag scanner (works for millions of triangles). */
ModelFile parseModel(const std::string &text) {
    ModelFile model;
    std::map<std::string, int> groupIds;
    std::vector<std::vector<int>> groups; // colour table indices
    std::map<std::string, std::pair<int, int>> objDefault;
    std::map<std::string, int> colourIds;
    auto colourId = [&](const std::string &hex) {
        auto it = colourIds.find(hex);
        if (it != colourIds.end()) return it->second;
        int id = int(model.colourTable.size());
        model.colourTable.push_back(hex);
        colourIds[hex] = id;
        return id;
    };
    auto groupOf = [&](const std::string &id) {
        auto it = groupIds.find(id);
        if (it != groupIds.end()) return it->second;
        int g = int(groups.size());
        groups.emplace_back();
        groupIds[id] = g;
        return g;
    };

    std::optional<std::string> current;
    RawMesh *mesh = nullptr;
    int group = -1;
    xml::Scanner sc(text);
    xml::Tag tag;
    while (sc.next(tag)) {
        const std::string_view name = tag.name;
        if (tag.closing) {
            if (name == "object") {
                current.reset();
                mesh = nullptr;
            } else if (name == "colorgroup" || name == "basematerials") {
                group = -1;
            }
            continue;
        }
        if (name == "vertex") {
            if (!mesh) continue;
            xml::Attrs a(tag.attrs);
            mesh->vertices.push_back(float(toNumber(a.value("x"), NAN)));
            mesh->vertices.push_back(float(toNumber(a.value("y"), NAN)));
            mesh->vertices.push_back(float(toNumber(a.value("z"), NAN)));
        } else if (name == "triangle") {
            if (!mesh) continue;
            xml::Attrs a(tag.attrs);
            mesh->triangles.push_back(toInt(a.value("v1"), -1));
            mesh->triangles.push_back(toInt(a.value("v2"), -1));
            mesh->triangles.push_back(toInt(a.value("v3"), -1));
            const std::string *paint = a.get("paint_color");
            if (!paint || paint->empty()) paint = a.get("slic3rpe:mmu_segmentation");
            if (!paint || paint->empty()) paint = a.get("mmu_segmentation");
            if (paint) mesh->paint += *paint;
            mesh->paintStart.push_back(uint32_t(mesh->paint.size()));
            const std::string *pid = a.get("pid");
            const std::string *p1 = a.get("p1");
            int g = -1, idx = -1;
            if (pid) {
                g = groupOf(*pid);
                if (p1) idx = toInt(*p1, -1);
            } else if (current && objDefault.count(*current)) {
                auto d = objDefault[*current];
                g = d.first;
                idx = p1 ? toInt(*p1, -1) : d.second;
            }
            mesh->rawGroup.push_back(idx >= 0 ? g : -1);
            mesh->rawIndex.push_back(idx);
        } else if (name == "model") {
            xml::Attrs a(tag.attrs);
            model.unitMm = unitMm(a.value("unit", "millimeter"));
        } else if (name == "object") {
            xml::Attrs a(tag.attrs);
            current = a.value("id");
            if (const std::string *n = a.get("name")) model.names[*current] = *n;
            if (const std::string *pid = a.get("pid")) objDefault[*current] = {groupOf(*pid), toInt(a.value("pindex", "0"))};
            if (tag.selfClosing) current.reset();
        } else if (name == "mesh") {
            if (current) {
                model.meshes[*current] = RawMesh();
                mesh = &model.meshes[*current];
            }
        } else if (name == "colorgroup" || name == "basematerials") {
            group = groupOf(xml::Attrs(tag.attrs).value("id"));
            groups[group].clear();
            if (tag.selfClosing) group = -1;
        } else if (name == "color") {
            if (group >= 0) groups[group].push_back(colourId(hexColour(xml::Attrs(tag.attrs).value("color", "#808080"))));
        } else if (name == "base") {
            if (group >= 0) groups[group].push_back(colourId(hexColour(xml::Attrs(tag.attrs).value("displaycolor", "#808080"))));
        } else if (name == "components") {
            if (current) model.components[*current];
        } else if (name == "component") {
            xml::Attrs a(tag.attrs);
            if (current) {
                const std::string *path = a.get("path");
                model.components[*current].push_back(
                    {path ? std::optional<std::string>(*path) : std::nullopt, a.value("objectid"), parseTransform(a.get("transform"))});
            }
        } else if (name == "item") {
            xml::Attrs a(tag.attrs);
            const std::string *path = a.get("path");
            model.build.push_back(
                {path ? std::optional<std::string>(*path) : std::nullopt, a.value("objectid"), parseTransform(a.get("transform"))});
        } else if (name == "metadata") {
            xml::Attrs a(tag.attrs);
            if (a.value("name") == "Application" && !tag.selfClosing) {
                std::string_view t = sc.text();
                size_t end = t.find('<', tag.end);
                std::string value = xml::decodeEntities(t.substr(tag.end, end == std::string_view::npos ? 0 : end - tag.end));
                size_t s = value.find_first_not_of(" \t\r\n");
                size_t e = value.find_last_not_of(" \t\r\n");
                model.application = s == std::string::npos ? "" : value.substr(s, e - s + 1);
            }
        }
    }
    for (auto &[id, m] : model.meshes) {
        m.colour.resize(m.rawGroup.size(), -1);
        for (size_t i = 0; i < m.rawGroup.size(); i++) {
            int g = m.rawGroup[i], k = m.rawIndex[i];
            if (g >= 0 && k >= 0 && k < int(groups[g].size())) m.colour[i] = groups[g][k];
        }
        m.rawGroup.clear();
        m.rawIndex.clear();
    }
    return model;
}

// --- slicer settings ---------------------------------------------------------

struct BambuPart {
    std::string subtype = "normal_part";
    int extruder = 0;
    std::string name;
};
struct BambuObject {
    std::string name;
    int extruder = 1;
    std::map<std::string, BambuPart> parts;
};

std::map<std::string, BambuObject> bambuSettings(const ZipReader &zip) {
    std::map<std::string, BambuObject> out;
    auto data = zip.read("Metadata/model_settings.config");
    if (!data) return out;
    xml::Scanner sc(*data);
    xml::Tag tag;
    std::vector<std::string> stack;
    BambuObject *obj = nullptr;
    BambuPart *part = nullptr;
    while (sc.next(tag)) {
        std::string name(tag.name);
        if (tag.closing) {
            if (!stack.empty()) stack.pop_back();
            if (name == "object") obj = nullptr;
            if (name == "part") part = nullptr;
            continue;
        }
        const std::string parent = stack.empty() ? "" : stack.back();
        xml::Attrs a(tag.attrs);
        if (name == "object") {
            obj = &out[a.value("id")];
        } else if (name == "part" && obj && parent == "object") {
            part = &obj->parts[a.value("id")];
            part->subtype = a.value("subtype", "normal_part");
        } else if (name == "metadata") {
            std::string key = a.value("key"), value = a.value("value");
            if (parent == "object" && obj) {
                if (key == "name") obj->name = value;
                if (key == "extruder") obj->extruder = std::max(1, toInt(value, 1));
            } else if (parent == "part" && part) {
                if (key == "name") part->name = value;
                if (key == "extruder") part->extruder = std::max(0, toInt(value, 0));
            }
        }
        if (!tag.selfClosing) stack.push_back(name);
    }
    return out;
}

std::vector<std::string> filamentColours(const ZipReader &zip) {
    std::vector<std::string> out;
    if (auto project = zip.read("Metadata/project_settings.config")) {
        QJsonParseError err;
        QJsonDocument doc = QJsonDocument::fromJson(QByteArray::fromStdString(*project), &err);
        if (err.error == QJsonParseError::NoError && doc.isObject()) {
            for (const auto &v : doc.object().value("filament_colour").toArray()) out.push_back(hexColour(v.toString().toStdString()));
            if (!out.empty()) return out;
        }
    }
    if (auto prusa = zip.read("Metadata/Slic3r_PE.config")) {
        for (const char *key : {"extruder_colour", "filament_colour"}) {
            std::string needle = std::string("; ") + key + " = ";
            size_t p = 0;
            while ((p = prusa->find(needle, p)) != std::string::npos) {
                if (p == 0 || (*prusa)[p - 1] == '\n') break;
                p++;
            }
            if (p == std::string::npos) continue;
            size_t start = p + needle.size();
            size_t end = prusa->find('\n', start);
            std::string line = prusa->substr(start, end == std::string::npos ? std::string::npos : end - start);
            size_t s = 0;
            while (s <= line.size()) {
                size_t e = line.find(';', s);
                std::string c = line.substr(s, e == std::string::npos ? std::string::npos : e - s);
                if (c.find_first_not_of(" \t\r") != std::string::npos) out.push_back(hexColour(c));
                if (e == std::string::npos) break;
                s = e + 1;
            }
            if (!out.empty()) return out;
        }
    }
    return out;
}

struct PrusaRange {
    int first, last;
    int extruder; // -1 = skip (modifier / not a model part)
};
struct PrusaObject {
    int def = 1;
    std::vector<PrusaRange> ranges;
    std::string name;
};

std::map<std::string, PrusaObject> prusaVolumes(const ZipReader &zip) {
    std::map<std::string, PrusaObject> out;
    auto data = zip.read("Metadata/Slic3r_PE_model.config");
    if (!data) return out;
    xml::Scanner sc(*data);
    xml::Tag tag;
    std::vector<std::string> stack;
    PrusaObject *obj = nullptr;
    struct Vol {
        int first = 0, last = 0;
        std::map<std::string, std::string> meta;
    };
    std::optional<Vol> vol;
    std::map<std::string, std::string> objMeta;
    auto finishVolume = [&]() {
        if (!obj || !vol) return;
        auto get = [&](const char *k, const char *d) {
            auto it = vol->meta.find(k);
            return it == vol->meta.end() ? std::string(d) : it->second;
        };
        bool skip = get("modifier", "") == "1" || get("volume_type", "ModelPart") != "ModelPart";
        int ex = toInt(get("extruder", "0"), 0);
        obj->ranges.push_back({vol->first, vol->last, skip ? -1 : (ex ? ex : -2)});
        vol.reset();
    };
    while (sc.next(tag)) {
        std::string name(tag.name);
        if (tag.closing) {
            if (!stack.empty()) stack.pop_back();
            if (name == "volume") finishVolume();
            if (name == "object" && obj) {
                obj->def = std::max(1, toInt(objMeta["extruder"].empty() ? "1" : objMeta["extruder"], 1));
                obj->name = objMeta["name"];
                for (auto &r : obj->ranges)
                    if (r.extruder == -2) r.extruder = obj->def;
                obj = nullptr;
            }
            continue;
        }
        const std::string parent = stack.empty() ? "" : stack.back();
        xml::Attrs a(tag.attrs);
        if (name == "object") {
            obj = &out[a.value("id")];
            objMeta.clear();
        } else if (name == "volume" && obj && parent == "object") {
            vol = Vol{toInt(a.value("firstid", "0")), toInt(a.value("lastid", "0")), {}};
            if (tag.selfClosing) finishVolume();
        } else if (name == "metadata") {
            if (parent == "object" && obj && a.value("type") == "object") objMeta[a.value("key")] = a.value("value");
            else if (parent == "volume" && vol) vol->meta[a.value("key")] = a.value("value");
        }
        if (!tag.selfClosing) stack.push_back(name);
    }
    return out;
}

// --- builder --------------------------------------------------------------------

class Builder {
public:
    std::vector<double> vertices;
    int object = 0;
    int splitTriangles = 0;

    int keyId(const std::string &key) {
        auto it = keyIds_.find(key);
        if (it != keyIds_.end()) return it->second;
        int id = int(keyTable.size());
        keyTable.push_back(key);
        keyIds_[key] = id;
        return id;
    }
    std::vector<std::string> keyTable;

    int midpoint(int i, int j) {
        uint64_t key = i < j ? (uint64_t(uint32_t(i)) << 32 | uint32_t(j)) : (uint64_t(uint32_t(j)) << 32 | uint32_t(i));
        auto it = mid_.find(key);
        if (it != mid_.end()) return it->second;
        auto &v = vertices;
        double x = (v[3 * i] + v[3 * j]) / 2, y = (v[3 * i + 1] + v[3 * j + 1]) / 2, z = (v[3 * i + 2] + v[3 * j + 2]) / 2;
        v.push_back(x);
        v.push_back(y);
        v.push_back(z);
        int m = int(v.size() / 3) - 1;
        mid_[key] = m;
        return m;
    }

    void addMesh(const RawMesh &mesh, const std::vector<std::string> &colourTable, const Mat &t, double unit,
                 const std::function<int(size_t)> &defaultKey, const std::function<bool(size_t)> &skip) {
        const int base = int(vertices.size() / 3);
        const int count = int(mesh.vertices.size() / 3);
        const auto &v = mesh.vertices;
        for (size_t i = 0; i < v.size(); i += 3) {
            double x = v[i], y = v[i + 1], z = v[i + 2];
            vertices.push_back((x * t[0] + y * t[3] + z * t[6] + t[9]) * unit);
            vertices.push_back((x * t[1] + y * t[4] + z * t[7] + t[10]) * unit);
            vertices.push_back((x * t[2] + y * t[5] + z * t[8] + t[11]) * unit);
        }
        const size_t n = mesh.triangles.size() / 3;
        auto mp = [this](int i, int j) { return midpoint(i, j); };
        std::vector<std::array<int, 4>> leaves;
        for (size_t i = 0; i < n; i++) {
            if (skip && skip(i)) continue;
            int a = mesh.triangles[3 * i], b = mesh.triangles[3 * i + 1], c = mesh.triangles[3 * i + 2];
            if (a < 0 || b < 0 || c < 0 || a >= count || b >= count || c >= count) continue;
            std::array<int, 3> tri{a + base, b + base, c + base};
            const int own = mesh.colour[i] >= 0 ? keyId(colourTable[mesh.colour[i]]) : -1;
            const int fallback = own >= 0 ? own : defaultKey(i);
            std::string code = mesh.paintOf(i);
            if (code.empty()) {
                leaves_.push_back({tri[0], tri[1], tri[2], fallback, object});
                continue;
            }
            PaintTree tree;
            try {
                tree = decodePaint(code);
            } catch (...) {
                tree = PaintTree();
            }
            if (tree.splitSides == 0 && own >= 0) {
                leaves_.push_back({tri[0], tri[1], tri[2], own, object}); // files with both: the exact colour wins
                continue;
            }
            if (tree.splitSides != 0) splitTriangles++;
            leaves.clear();
            splitLeaves(tri, tree, mp, leaves);
            for (const auto &l : leaves)
                leaves_.push_back({l[0], l[1], l[2], l[3] ? keyId("f" + std::to_string(l[3])) : fallback, object});
        }
    }

    void chain(int a, int b, std::vector<int> &out) const {
        uint64_t key = a < b ? (uint64_t(uint32_t(a)) << 32 | uint32_t(b)) : (uint64_t(uint32_t(b)) << 32 | uint32_t(a));
        auto it = mid_.find(key);
        if (it == mid_.end()) return;
        int m = it->second;
        chain(a, m, out);
        out.push_back(m);
        chain(m, b, out);
    }

    /** Triangles (with T-junctions resolved so the mesh stays closed), their colour keys and objects. */
    void finish(std::vector<float> &positions, std::vector<int> &keys, std::vector<uint16_t> &objects) const {
        const auto &v = vertices;
        auto push = [&](int i) {
            positions.push_back(float(v[3 * i]));
            positions.push_back(float(v[3 * i + 1]));
            positions.push_back(float(v[3 * i + 2]));
        };
        positions.reserve(leaves_.size() * 9);
        keys.reserve(leaves_.size());
        objects.reserve(leaves_.size());
        std::vector<int> ring;
        for (const auto &l : leaves_) {
            int a = l[0], b = l[1], c = l[2];
            if (mid_.empty()) {
                push(a), push(b), push(c);
                keys.push_back(l[3]);
                objects.push_back(uint16_t(l[4]));
                continue;
            }
            ring.clear();
            ring.push_back(a);
            chain(a, b, ring);
            ring.push_back(b);
            chain(b, c, ring);
            ring.push_back(c);
            chain(c, a, ring);
            if (ring.size() == 3) {
                push(a), push(b), push(c);
                keys.push_back(l[3]);
                objects.push_back(uint16_t(l[4]));
                continue;
            }
            // a triangle with extra points on its sides: fan from its centroid
            double cx = (v[3 * a] + v[3 * b] + v[3 * c]) / 3;
            double cy = (v[3 * a + 1] + v[3 * b + 1] + v[3 * c + 1]) / 3;
            double cz = (v[3 * a + 2] + v[3 * b + 2] + v[3 * c + 2]) / 3;
            for (size_t k = 0; k < ring.size(); k++) {
                positions.push_back(float(cx));
                positions.push_back(float(cy));
                positions.push_back(float(cz));
                push(ring[k]);
                push(ring[(k + 1) % ring.size()]);
                keys.push_back(l[3]);
                objects.push_back(uint16_t(l[4]));
            }
        }
    }

private:
    std::unordered_map<uint64_t, int> mid_;
    std::unordered_map<std::string, int> keyIds_;
    std::vector<std::array<int, 5>> leaves_;
};

} // namespace

Model read3mf(const uint8_t *data, size_t size) {
    ZipReader zip(data, size);
    std::string rootPath = "3D/3dmodel.model";
    if (auto rels = zip.read("_rels/.rels")) {
        static const std::regex re(R"re(Target="([^"]+)"[^>]*Type="[^"]*/3dmodel"|Type="[^"]*/3dmodel"[^>]*Target="([^"]+)")re");
        std::smatch m;
        if (std::regex_search(*rels, m, re)) rootPath = normPath(m[1].matched ? m[1].str() : m[2].str());
    }
    std::map<std::string, std::unique_ptr<ModelFile>> cache;
    auto modelFile = [&](const std::optional<std::string> &p) -> std::pair<std::string, ModelFile *> {
        std::string path = normPath(p.value_or(rootPath));
        auto it = cache.find(path);
        if (it != cache.end()) return {path, it->second.get()};
        auto bytes = zip.read(path);
        if (!bytes) throw std::runtime_error("This 3MF is missing " + path + ".");
        auto mf = std::make_unique<ModelFile>(parseModel(*bytes));
        ModelFile *ptr = mf.get();
        cache[path] = std::move(mf);
        return {path, ptr};
    };
    auto [rootName, root] = modelFile(rootPath);
    const auto bambu = bambuSettings(zip);
    const auto prusa = prusaVolumes(zip);
    const auto filamentHex = filamentColours(zip);
    std::string source = root->application.rfind("BambuStudio", 0) == 0 || !bambu.empty()        ? "bambu"
                         : !prusa.empty() || root->application.rfind("PrusaSlicer", 0) == 0 ? "prusa"
                                                                                             : "3mf";

    Builder builder;
    Model out;
    int objectCount = 0;
    for (const Ref &item : root->build) {
        auto [itemName, itemModel] = modelFile(item.path);
        (void)itemModel;
        const BambuObject *settings = nullptr;
        if (itemName == rootName) {
            auto it = bambu.find(item.objectId);
            if (it != bambu.end()) settings = &it->second;
        }
        builder.object = objectCount;
        std::string objName;
        if (settings && !settings->name.empty()) objName = settings->name;
        else if (auto it = prusa.find(item.objectId); it != prusa.end() && !it->second.name.empty()) objName = it->second.name;
        else if (auto it2 = root->names.find(item.objectId); it2 != root->names.end()) objName = it2->second;
        else objName = "Object " + std::to_string(objectCount + 1);
        out.objectNames.push_back(objName);
        objectCount++;

        std::function<void(const std::optional<std::string> &, const std::string &, const Mat &, int, int)> walk =
            [&](const std::optional<std::string> &path, const std::string &oid, const Mat &transform, int partExtruder, int depth) {
                if (depth > 16) return;
                auto [p, model] = modelFile(path);
                auto comps = model->components.find(oid);
                if (comps != model->components.end()) {
                    for (const Ref &c : comps->second) {
                        const BambuPart *part = nullptr;
                        if (p == rootName && settings) {
                            auto it = settings->parts.find(c.objectId);
                            if (it != settings->parts.end()) part = &it->second;
                        }
                        if (part && part->subtype != "normal_part") continue; // modifiers, negative volumes, blockers
                        walk(c.path ? c.path : std::optional<std::string>(p), c.objectId, compose(c.transform, transform),
                             part && part->extruder ? part->extruder : partExtruder, depth + 1);
                    }
                    return;
                }
                auto meshIt = model->meshes.find(oid);
                if (meshIt == model->meshes.end()) return;
                const std::string fKey = "f" + std::to_string(partExtruder);
                std::function<int(size_t)> defaultKey = [&builder, fKey](size_t) { return builder.keyId(fKey); };
                std::function<bool(size_t)> skip;
                const PrusaObject *pv = nullptr;
                if (p == rootName) {
                    auto it = prusa.find(oid);
                    if (it != prusa.end()) pv = &it->second;
                }
                if (pv) {
                    auto lookup = [pv](size_t i) {
                        for (const auto &r : pv->ranges)
                            if (r.first <= int(i) && int(i) <= r.last) return r.extruder;
                        return pv->def;
                    };
                    skip = [lookup](size_t i) { return lookup(i) == -1; };
                    defaultKey = [&builder, lookup, pv](size_t i) {
                        int ex = lookup(i);
                        return builder.keyId("f" + std::to_string(ex == -1 ? pv->def : ex));
                    };
                }
                builder.addMesh(meshIt->second, model->colourTable, transform, model->unitMm, defaultKey, skip);
            };
        walk(itemName, item.objectId, item.transform, settings ? settings->extruder : 1, 0);
    }

    std::vector<int> keys;
    builder.finish(out.positions, keys, out.objects);
    if (out.positions.empty()) throw std::runtime_error("This 3MF has no printable objects.");
    for (float f : out.positions)
        if (!std::isfinite(f)) throw std::runtime_error("This 3MF has broken coordinates.");

    // Colour keys -> palette, filaments first in number order, then rgb colours in order of use.
    std::vector<int> used;
    {
        std::vector<char> seen(builder.keyTable.size(), 0);
        for (int k : keys)
            if (!seen[k]) {
                seen[k] = 1;
                used.push_back(k);
            }
    }
    auto filamentNumber = [&](int k) {
        const std::string &key = builder.keyTable[k];
        return key[0] == 'f' ? double(toInt(std::string_view(key).substr(1))) : std::numeric_limits<double>::infinity();
    };
    std::stable_sort(used.begin(), used.end(), [&](int a, int b) { return filamentNumber(a) < filamentNumber(b); });
    std::vector<int> keyIndex(builder.keyTable.size(), 0);
    for (int key : used) {
        keyIndex[key] = std::min(int(out.palette.size()), 255);
        const std::string &k = builder.keyTable[key];
        if (k[0] == 'f') {
            int n = toInt(std::string_view(k).substr(1));
            out.palette.push_back(n > 0 && n <= int(filamentHex.size()) ? filamentHex[n - 1]
                                                                       : DEFAULT_FILAMENT_COLOURS[((n - 1) % 16 + 16) % 16]);
            out.names.push_back("Filament " + std::to_string(n));
        } else {
            out.palette.push_back(k);
            out.names.push_back(k);
        }
    }
    if (out.palette.size() > 256) {
        out.palette.resize(256);
        out.names.resize(256);
    }
    out.colours.resize(keys.size());
    for (size_t i = 0; i < keys.size(); i++) out.colours[i] = uint8_t(keyIndex[keys[i]]);
    out.source = source;
    out.splitTriangles = builder.splitTriangles;
    return out;
}

} // namespace stlware
