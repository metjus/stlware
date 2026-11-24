#include "Model.h"

#include <algorithm>
#include <cctype>
#include <cstdio>
#include <limits>

namespace stlware {

static int hexDigit(char c) {
    if (c >= '0' && c <= '9') return c - '0';
    c = char(std::tolower(static_cast<unsigned char>(c)));
    if (c >= 'a' && c <= 'f') return c - 'a' + 10;
    return -1;
}

Colour parseHex(const std::string &hex) {
    std::string s = hex;
    s.erase(0, s.find_first_not_of(" \t\r\n"));
    if (!s.empty() && s[0] == '#') s.erase(0, 1);
    if (s.size() < 6) return {};
    int v[6];
    for (int i = 0; i < 6; i++) {
        v[i] = hexDigit(s[i]);
        if (v[i] < 0) return {};
    }
    return {uint8_t(v[0] * 16 + v[1]), uint8_t(v[2] * 16 + v[3]), uint8_t(v[4] * 16 + v[5])};
}

std::string toHex(Colour c) {
    char buf[8];
    std::snprintf(buf, sizeof buf, "#%02X%02X%02X", c.r, c.g, c.b);
    return buf;
}

std::array<float, 6> Model::bounds() const {
    if (positions.empty()) return {0, 0, 0, 0, 0, 0};
    std::array<float, 6> b{std::numeric_limits<float>::max(), std::numeric_limits<float>::max(),
                           std::numeric_limits<float>::max(), std::numeric_limits<float>::lowest(),
                           std::numeric_limits<float>::lowest(), std::numeric_limits<float>::lowest()};
    for (size_t i = 0; i < positions.size(); i += 3) {
        for (int k = 0; k < 3; k++) {
            b[k] = std::min(b[k], positions[i + k]);
            b[k + 3] = std::max(b[k + 3], positions[i + k]);
        }
    }
    return b;
}

} // namespace stlware
