#include "MainWindow.h"
#include "Theme.h"
#include "Version.h"

#include <QApplication>
#include <QFileInfo>
#include <QSurfaceFormat>

int main(int argc, char *argv[]) {
    QSurfaceFormat fmt;
    fmt.setVersion(3, 3);
    fmt.setProfile(QSurfaceFormat::CoreProfile);
    fmt.setDepthBufferSize(24);
    fmt.setSamples(4);
    QSurfaceFormat::setDefaultFormat(fmt);

    QApplication app(argc, argv);
    QApplication::setOrganizationName("STLware");
    QApplication::setOrganizationDomain("stlware.com");
    QApplication::setApplicationName("STLware");
    QApplication::setApplicationVersion(stlware::appVersion());
    stlware::applyTheme(app);

    stlware::MainWindow window;
    window.show();
    // A model opened from Explorer ("Open with STLware" or a double click) comes as the first argument.
    const QStringList args = app.arguments();
    for (int i = 1; i < args.size(); i++) {
        if (!args[i].startsWith('-') && QFileInfo::exists(args[i])) {
            window.openFile(args[i]);
            break;
        }
    }
    return app.exec();
}
