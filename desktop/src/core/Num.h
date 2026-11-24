#pragma once
// Locale-independent number parsing (Qt sets the C locale from the system, where the
// decimal separator may be a comma, so strtof/atof must not be used on file data).

#include <charconv>
#include <string_view>

namespace stlware {

/** Parse a number at the start of `s` (leading whitespace and '+' allowed). Returns chars used, 0 if none. */
inline size_t parseNumber(std::string_view s, double &out) {
    size_t i = 0;
    while (i < s.size() && (s[i] == ' ' || s[i] == '\t' || s[i] == '\r' || s[i] == '\n')) i++;
    if (i < s.size() && s[i] == '+') i++;
    auto res = std::from_chars(s.data() + i, s.data() + s.size(), out);
    if (res.ec != std::errc()) return 0;
    return size_t(res.ptr - s.data());
}

inline double toNumber(std::string_view s, double fallback = 0) {
    double v;
    return parseNumber(s, v) ? v : fallback;
}

inline int toInt(std::string_view s, int fallback = 0) {
    double v;
    return parseNumber(s, v) ? int(v) : fallback;
}

} // namespace stlware
