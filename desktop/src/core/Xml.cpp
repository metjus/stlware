#include "Xml.h"

#include <string>

namespace stlware::xml {

static bool isNameStart(char c) {
    return (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z') || c == '_';
}
static bool isNameChar(char c) {
    return isNameStart(c) || (c >= '0' && c <= '9') || c == '.' || c == '-' || c == ':';
}
static bool isSpace(char c) { return c == ' ' || c == '\t' || c == '\r' || c == '\n'; }

bool Scanner::next(Tag &tag) {
    const std::string_view x = xml_;
    while (true) {
        size_t lt = x.find('<', pos_);
        if (lt == std::string_view::npos || lt + 1 >= x.size()) return false;
        char c = x[lt + 1];
        if (c == '?') {
            size_t e = x.find("?>", lt + 2);
            if (e == std::string_view::npos) return false;
            pos_ = e + 2;
            continue;
        }
        if (c == '!') {
            if (x.substr(lt, 4) == "<!--") {
                size_t e = x.find("-->", lt + 4);
                if (e == std::string_view::npos) return false;
                pos_ = e + 3;
            } else if (x.substr(lt, 9) == "<![CDATA[") {
                size_t e = x.find("]]>", lt + 9);
                if (e == std::string_view::npos) return false;
                pos_ = e + 3;
            } else {
                size_t e = x.find('>', lt + 2);
                if (e == std::string_view::npos) return false;
                pos_ = e + 1;
            }
            continue;
        }
        size_t i = lt + 1;
        tag.closing = false;
        if (x[i] == '/') {
            tag.closing = true;
            i++;
        }
        if (i >= x.size() || !isNameStart(x[i])) {
            pos_ = lt + 1;
            continue;
        }
        size_t nameStart = i;
        while (i < x.size() && isNameChar(x[i])) i++;
        std::string_view full = x.substr(nameStart, i - nameStart);
        size_t colon = full.rfind(':');
        tag.name = colon == std::string_view::npos ? full : full.substr(colon + 1);
        // Find the closing '>' outside of quoted attribute values.
        size_t attrStart = i;
        char quote = 0;
        while (i < x.size()) {
            char ch = x[i];
            if (quote) {
                if (ch == quote) quote = 0;
            } else if (ch == '"' || ch == '\'') {
                quote = ch;
            } else if (ch == '>') {
                break;
            }
            i++;
        }
        if (i >= x.size()) return false;
        size_t attrEnd = i;
        tag.selfClosing = attrEnd > attrStart && x[attrEnd - 1] == '/';
        if (tag.selfClosing) attrEnd--;
        tag.attrs = x.substr(attrStart, attrEnd - attrStart);
        tag.end = i + 1;
        pos_ = i + 1;
        return true;
    }
}

std::string decodeEntities(std::string_view s) {
    if (s.find('&') == std::string_view::npos) return std::string(s);
    std::string out;
    out.reserve(s.size());
    for (size_t i = 0; i < s.size(); i++) {
        if (s[i] != '&') {
            out += s[i];
            continue;
        }
        size_t semi = s.find(';', i);
        if (semi == std::string_view::npos) {
            out += s[i];
            continue;
        }
        std::string_view ent = s.substr(i + 1, semi - i - 1);
        if (ent == "lt") out += '<';
        else if (ent == "gt") out += '>';
        else if (ent == "quot") out += '"';
        else if (ent == "apos") out += '\'';
        else if (ent == "amp") out += '&';
        else if (!ent.empty() && ent[0] == '#') {
            unsigned long code = '?';
            try {
                code = ent.size() > 1 && (ent[1] == 'x' || ent[1] == 'X') ? std::stoul(std::string(ent.substr(2)), nullptr, 16)
                                                                           : std::stoul(std::string(ent.substr(1)));
            } catch (...) {
            }
            if (code > 0x10FFFF) code = '?';
            // UTF-8 encode
            if (code < 0x80) out += char(code);
            else if (code < 0x800) {
                out += char(0xC0 | (code >> 6));
                out += char(0x80 | (code & 0x3F));
            } else if (code < 0x10000) {
                out += char(0xE0 | (code >> 12));
                out += char(0x80 | ((code >> 6) & 0x3F));
                out += char(0x80 | (code & 0x3F));
            } else {
                out += char(0xF0 | (code >> 18));
                out += char(0x80 | ((code >> 12) & 0x3F));
                out += char(0x80 | ((code >> 6) & 0x3F));
                out += char(0x80 | (code & 0x3F));
            }
        } else {
            out.append(s.substr(i, semi - i + 1));
        }
        i = semi;
    }
    return out;
}

Attrs::Attrs(std::string_view raw) {
    size_t i = 0;
    while (i < raw.size()) {
        while (i < raw.size() && isSpace(raw[i])) i++;
        size_t ns = i;
        while (i < raw.size() && !isSpace(raw[i]) && raw[i] != '=') i++;
        if (i == ns) break;
        std::string_view name = raw.substr(ns, i - ns);
        while (i < raw.size() && isSpace(raw[i])) i++;
        if (i >= raw.size() || raw[i] != '=') continue;
        i++;
        while (i < raw.size() && isSpace(raw[i])) i++;
        if (i >= raw.size()) break;
        char q = raw[i];
        if (q != '"' && q != '\'') break;
        size_t vs = ++i;
        while (i < raw.size() && raw[i] != q) i++;
        std::string value = decodeEntities(raw.substr(vs, i - vs));
        i++;
        items_.emplace_back(std::string(name), value);
    }
    // keep the unprefixed names too (path, mmu_segmentation), unless taken
    size_t n = items_.size();
    for (size_t k = 0; k < n; k++) {
        const std::string &name = items_[k].first;
        size_t colon = name.find(':');
        if (colon == std::string::npos) continue;
        std::string local = name.substr(colon + 1);
        if (!get(local)) items_.emplace_back(local, items_[k].second);
    }
}

const std::string *Attrs::get(std::string_view name) const {
    for (const auto &[k, v] : items_)
        if (k == name) return &v;
    return nullptr;
}

} // namespace stlware::xml
