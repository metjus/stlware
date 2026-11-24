#pragma once
// STL reading (binary and ASCII). Port of src/core/stl.ts.

#include <cstdint>
#include <vector>

namespace stlware {

/** Triangle soup, 9 floats per triangle. Throws std::runtime_error on unreadable data. */
std::vector<float> readStl(const uint8_t *data, size_t size);

/** Binary STL of a triangle soup. */
std::vector<uint8_t> writeStl(const std::vector<float> &soup, const char *name = "STLware");

} // namespace stlware
