#pragma once

#include "Model.h"
#include "Viewport.h"

#include <QFutureWatcher>
#include <QMainWindow>
#include <memory>

class QLabel;
class QPushButton;
class QProgressBar;
class QVBoxLayout;
class QWidget;

namespace stlware {

class Updater;

struct LoadResult {
    QString path;
    std::shared_ptr<Model> model;
    std::vector<MeshVertex> vertices;
    QString error;
    qint64 millis = 0;
};

class MainWindow : public QMainWindow {
    Q_OBJECT
public:
    explicit MainWindow(QWidget *parent = nullptr);
    ~MainWindow() override;

    void openFile(const QString &path);

protected:
    void dragEnterEvent(QDragEnterEvent *e) override;
    void dropEvent(QDropEvent *e) override;
    void closeEvent(QCloseEvent *e) override;
    void resizeEvent(QResizeEvent *e) override;

private slots:
    void chooseFile();
    void closeModel();
    void onLoaded();
    void showAbout();
    void checkForUpdates();

private:
    void buildMenus();
    QWidget *buildTopBar();
    QWidget *buildSidePanel();
    QWidget *buildUpdateBar();
    void refreshPanel();
    void placeOverlay();
    void setupUpdater();

    Viewport *viewport_ = nullptr;
    QWidget *empty_ = nullptr;
    QLabel *fileName_ = nullptr;
    QWidget *side_ = nullptr;
    QVBoxLayout *sideLayout_ = nullptr;
    QLabel *status_ = nullptr;

    QWidget *updateBar_ = nullptr;
    QLabel *updateText_ = nullptr;
    QPushButton *updateNow_ = nullptr;
    QPushButton *updateLater_ = nullptr;
    QProgressBar *updateProgress_ = nullptr;

    std::shared_ptr<Model> model_;
    QString path_;
    QFutureWatcher<LoadResult> loader_;
    Updater *updater_ = nullptr;
    bool manualCheck_ = false;
};

} // namespace stlware
