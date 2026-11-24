#pragma once
// Read-only ZIP access (3MF files are ZIP packages), on top of miniz.

#include <cstdint>
#include <map>
#include <memory>
#include <optional>
#include <string>
#include <vector>

namespace stlware {

class ZipReader {
public:
    /** Throws std::runtime_error when the data is not a ZIP. The data must outlive the reader. */
    ZipReader(const uint8_t *data, size_t size);
    ~ZipReader();
    ZipReader(const ZipReader &) = delete;
    ZipReader &operator=(const ZipReader &) = delete;

    bool has(const std::string &name) const;
    /** The file's contents, or nullopt when it is missing or unreadable. */
    std::optional<std::string> read(const std::string &name) const;
    std::vector<std::string> names() const;

private:
    struct Impl;
    std::unique_ptr<Impl> d;
};

/** A ZIP with the given files (deflate). */
std::vector<uint8_t> writeZip(const std::vector<std::pair<std::string, std::string>> &files);

} // namespace stlware
