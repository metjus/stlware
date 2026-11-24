#pragma once
// 3MF reading: Bambu Studio / OrcaSlicer projects (filament painting, per-part filaments,
// filament colours), PrusaSlicer projects and plain 3MF colours.
// Port of read3mf() in src/core/threemf.ts.

#include "Model.h"

#include <cstdint>
#include <string>
#include <vector>

namespace stlware {

constexpr int MAX_FILAMENTS = 16;
extern const char *const DEFAULT_FILAMENT_COLOURS[16];

/** One triangle's paint: a leaf state, or a split into 2-4 children. */
struct PaintTree {
    int state = 0;        // leaf: filament state (0 = not painted)
    int splitSides = 0;   // 0 = leaf
    int special = 0;
    std::vector<PaintTree> children;
};

/** Decode a Bambu/Prusa per-triangle paint string. Throws std::runtime_error when malformed. */
PaintTree decodePaint(const std::string &code);
std::string encodePaint(const PaintTree &tree);
/** Filament slot -> paint string: 1 -> "4", 2 -> "8", 3 -> "0C", 4 -> "1C". */
std::string paintColorCode(int filament);

/** Read a 3MF into one coloured triangle soup (all objects at their plate positions). Throws on errors. */
Model read3mf(const uint8_t *data, size_t size);

} // namespace stlware
