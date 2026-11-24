#include "Version.h"

#include <QStringList>

namespace stlware {

QString appVersion() { return QStringLiteral(STLWARE_VERSION); }

int compareVersions(const QString &a, const QString &b) {
    const QStringList pa = a.trimmed().split('.'), pb = b.trimmed().split('.');
    for (int i = 0; i < qMax(pa.size(), pb.size()); i++) {
        const int x = i < pa.size() ? pa[i].toInt() : 0;
        const int y = i < pb.size() ? pb[i].toInt() : 0;
        if (x != y) return x < y ? -1 : 1;
    }
    return 0;
}

} // namespace stlware
