#pragma once
#include <QString>

namespace stlware {

/** This build's version, e.g. "0.1.0" (desktop/VERSION). */
QString appVersion();
/** -1 if a < b, 0 if equal, 1 if a > b, comparing dotted numbers ("0.10.0" > "0.9.3"). */
int compareVersions(const QString &a, const QString &b);

} // namespace stlware
