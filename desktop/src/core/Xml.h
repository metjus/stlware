#pragma once
// A small, fast XML tag scanner. 3MF model files can hold millions of <vertex> and <triangle>
// tags, so this does not build a DOM. Port of the tag scanner in src/core/threemf.ts.

#include <string>
#include <string_view>
#include <utility>
#include <vector>

namespace stlware::xml {

struct Tag {
    bool closing = false;
    bool selfClosing = false;
    std::string_view name;    // local name, without prefix
    std::string_view attrs;   // raw attribute text
    size_t end = 0;           // offset just after '>'
};

class Scanner {
public:
    explicit Scanner(std::string_view xml) : xml_(xml) {}
    bool next(Tag &tag);
    std::string_view text() const { return xml_; }

private:
    std::string_view xml_;
    size_t pos_ = 0;
};

std::string decodeEntities(std::string_view s);

/** Parsed attributes: full names ("p:path") and, unless taken, their local names ("path"). */
class Attrs {
public:
    explicit Attrs(std::string_view raw);
    /** nullptr when missing. */
    const std::string *get(std::string_view name) const;
    std::string value(std::string_view name, std::string_view fallback = {}) const {
        const std::string *v = get(name);
        return v ? *v : std::string(fallback);
    }
    bool has(std::string_view name) const { return get(name) != nullptr; }

private:
    std::vector<std::pair<std::string, std::string>> items_;
};

} // namespace stlware::xml
