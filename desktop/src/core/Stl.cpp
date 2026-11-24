#include "Stl.h"
#include "Num.h"

#include <cmath>
#include <cstdlib>
#include <cstring>
#include <stdexcept>
#include <string_view>

namespace stlware {

static uint32_t readU32(const uint8_t *p) {
    return uint32_t(p[0]) | uint32_t(p[1]) << 8 | uint32_t(p[2]) << 16 | uint32_t(p[3]) << 24;
}

static float readF32(const uint8_t *p) {
    uint32_t u = readU32(p);
    float f;
    std::memcpy(&f, &u, 4);
    return f;
}

static bool isBinary(const uint8_t *data, size_t size) {
    if (size < 84) return false;
    uint64_t count = readU32(data + 80);
    if (84 + count * 50 == size) return true;
    std::string_view head(reinterpret_cast<const char *>(data), size < 512 ? size : 512);
    size_t start = head.find_first_not_of(" \t\r\n");
    bool ascii = start != std::string_view::npos && head.substr(start, 5) == "solid" &&
                 head.find("facet") != std::string_view::npos;
    return !ascii;
}

std::vector<float> readStl(const uint8_t *data, size_t size) {
    std::vector<float> out;
    if (isBinary(data, size)) {
        uint64_t count = readU32(data + 80);
        if (84 + count * 50 > size) count = (size - 84) / 50; // truncated file: keep what is there
        out.resize(count * 9);
        for (uint64_t t = 0; t < count; t++) {
            const uint8_t *p = data + 84 + t * 50 + 12;
            for (int k = 0; k < 9; k++) out[t * 9 + k] = readF32(p + k * 4);
        }
    } else {
        std::string_view text(reinterpret_cast<const char *>(data), size);
        size_t pos = 0;
        while ((pos = text.find("vertex", pos)) != std::string_view::npos) {
            pos += 6;
            for (int k = 0; k < 3; k++) {
                double v;
                size_t used = parseNumber(text.substr(pos), v);
                if (!used) break;
                out.push_back(float(v));
                pos += used;
            }
        }
        out.resize(out.size() - out.size() % 9);
    }
    if (out.empty()) throw std::runtime_error("This STL has no triangles.");
    for (float f : out)
        if (!std::isfinite(f)) throw std::runtime_error("This STL has broken coordinates.");
    return out;
}

std::vector<uint8_t> writeStl(const std::vector<float> &soup, const char *name) {
    size_t count = soup.size() / 9;
    std::vector<uint8_t> out(84 + count * 50, 0);
    std::strncpy(reinterpret_cast<char *>(out.data()), name, 79);
    uint32_t c = uint32_t(count);
    std::memcpy(out.data() + 80, &c, 4);
    for (size_t t = 0; t < count; t++) {
        const float *v = soup.data() + t * 9;
        float ux = v[3] - v[0], uy = v[4] - v[1], uz = v[5] - v[2];
        float wx = v[6] - v[0], wy = v[7] - v[1], wz = v[8] - v[2];
        float n[3] = {uy * wz - uz * wy, uz * wx - ux * wz, ux * wy - uy * wx};
        float len = std::sqrt(n[0] * n[0] + n[1] * n[1] + n[2] * n[2]);
        if (len > 0)
            for (float &x : n) x /= len;
        uint8_t *p = out.data() + 84 + t * 50;
        std::memcpy(p, n, 12);
        std::memcpy(p + 12, v, 36);
    }
    return out;
}

} // namespace stlware
