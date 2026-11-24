#pragma once
// A loaded model: a triangle soup with one colour per triangle.
// Mirrors ColouredSoup / Imported in the web editor (src/core/obj.ts, threemf.ts).

#include <array>
#include <cstdint>
#include <string>
#include <vector>

namespace stlware {

struct Colour {
    uint8_t r = 128, g = 128, b = 128;
};

/** "#RRGGBB" (or "RRGGBB", "#RRGGBBAA") -> colour; grey when unreadable. */
Colour parseHex(const std::string &hex);
std::string toHex(Colour c);

struct Model {
    std::vector<float> positions;      // 9 floats per triangle (x, y, z of 3 corners), millimetres
    std::vector<uint8_t> colours;      // per triangle, index into palette
    std::vector<std::string> palette;  // "#RRGGBB"
    std::vector<std::string> names;    // per palette entry
    std::vector<uint16_t> objects;     // per triangle, object number
    std::vector<std::string> objectNames;
    std::string source;                // "stl", "bambu", "prusa", "3mf"
    int splitTriangles = 0;            // painted triangles that were subdivided on import

    size_t triangleCount() const { return positions.size() / 9; }
    /** Axis-aligned bounds: min x, y, z, max x, y, z. All zero when empty. */
    std::array<float, 6> bounds() const;
};

} // namespace stlware
