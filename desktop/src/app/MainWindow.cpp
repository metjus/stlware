#include "MainWindow.h"

#include "Stl.h"
#include "ThreeMF.h"
#include "Updater.h"
#include "Version.h"

#include <QAction>
#include <QApplication>
#include <QCloseEvent>
#include <QDesktopServices>
#include <QDragEnterEvent>
#include <QElapsedTimer>
#include <QFile>
#include <QFileDialog>
#include <QFileInfo>
#include <QGridLayout>
#include <QHBoxLayout>
#include <QLabel>
#include <QLocale>
#include <QMenuBar>
#include <QMessageBox>
#include <QMimeData>
#include <QProgressBar>
#include <QPushButton>
#include <QScrollArea>
#include <QSettings>
#include <QStatusBar>
#include <QTimer>
#include <QUrl>
#include <QVBoxLayout>
#include <QtConcurrent/QtConcurrentRun>

namespace stlware {

namespace {

const qint64 MAX_FILE_BYTES = qint64(2) * 1024 * 1024 * 1024;

LoadResult loadFile(const QString &path) {
    LoadResult r;
    r.path = path;
    QElapsedTimer timer;
    timer.start();
    try {
        QFile f(path);
        if (!f.open(QIODevice::ReadOnly)) throw std::runtime_error("The file could not be opened.");
        if (f.size() > MAX_FILE_BYTES) throw std::runtime_error("The file is larger than 2 GB.");
        const QByteArray data = f.readAll();
        const auto *bytes = reinterpret_cast<const uint8_t *>(data.constData());
        const QString ext = QFileInfo(path).suffix().toLower();
        auto model = std::make_shared<Model>();
        if (ext == "3mf") {
            *model = read3mf(bytes, size_t(data.size()));
        } else {
            model->positions = readStl(bytes, size_t(data.size()));
            model->colours.assign(model->triangleCount(), 0);
            model->palette = {"#C8CACF"};
            model->names = {"Model"};
            model->objects.assign(model->triangleCount(), 0);
            model->objectNames = {QFileInfo(path).completeBaseName().toStdString()};
            model->source = "stl";
        }
        r.vertices = buildMeshVertices(*model);
        r.model = model;
    } catch (const std::bad_alloc &) {
        r.error = QObject::tr("There is not enough memory to open this model.");
    } catch (const std::exception &e) {
        r.error = QString::fromUtf8(e.what());
    }
    r.millis = timer.elapsed();
    return r;
}

QLabel *label(const QString &text, const char *object = nullptr) {
    auto *l = new QLabel(text);
    if (object) l->setObjectName(object);
    return l;
}

QString formatNumber(qint64 n) {
    QLocale en(QLocale::English);
    return en.toString(n).replace(',', QChar(0x2009)); // thin space as thousands separator
}

QString formatMm(float v) { return QString::number(double(v), 'f', v < 100 ? 1 : 0); }

bool supported(const QString &path) {
    const QString ext = QFileInfo(path).suffix().toLower();
    return ext == "stl" || ext == "3mf";
}

} // namespace

MainWindow::MainWindow(QWidget *parent) : QMainWindow(parent) {
    setWindowTitle("STLware");
    setWindowIcon(QIcon(":/stlware-256.png"));
    setAcceptDrops(true);
    resize(1360, 860);

    auto *central = new QWidget;
    auto *outer = new QVBoxLayout(central);
    outer->setContentsMargins(0, 0, 0, 0);
    outer->setSpacing(0);
    outer->addWidget(buildTopBar());
    outer->addWidget(buildUpdateBar());

    auto *row = new QHBoxLayout;
    row->setContentsMargins(0, 0, 0, 0);
    row->setSpacing(0);
    viewport_ = new Viewport;
    connect(viewport_, &Viewport::glError, this, [this](const QString &log) {
        QMessageBox::critical(this, tr("Graphics problem"),
                              tr("STLware could not start the 3D view. Please update your graphics driver.\n\n%1").arg(log.left(800)));
    });
    row->addWidget(viewport_, 1);
    row->addWidget(buildSidePanel());
    outer->addLayout(row, 1);
    setCentralWidget(central);

    // Empty state, on top of the viewport
    empty_ = new QWidget(viewport_);
    empty_->setObjectName("EmptyState");
    empty_->setAttribute(Qt::WA_TranslucentBackground);
    auto *el = new QVBoxLayout(empty_);
    el->setAlignment(Qt::AlignCenter);
    auto *logo = new QLabel;
    logo->setPixmap(QPixmap(":/logo.png").scaled(72, 72, Qt::KeepAspectRatio, Qt::SmoothTransformation));
    logo->setAlignment(Qt::AlignCenter);
    el->addWidget(logo);
    el->addSpacing(10);
    auto *title = label(tr("Open a model to start"), "EmptyTitle");
    title->setAlignment(Qt::AlignCenter);
    el->addWidget(title);
    auto *hint = label(tr("Drop an STL or 3MF file here, or open one from your computer."), "DropHint");
    hint->setAlignment(Qt::AlignCenter);
    el->addWidget(hint);
    el->addSpacing(14);
    auto *open = new QPushButton(tr("Open model…"));
    open->setObjectName("Primary");
    open->setCursor(Qt::PointingHandCursor);
    connect(open, &QPushButton::clicked, this, &MainWindow::chooseFile);
    auto *btnRow = new QHBoxLayout;
    btnRow->addStretch();
    btnRow->addWidget(open);
    btnRow->addStretch();
    el->addLayout(btnRow);

    status_ = new QLabel;
    status_->setContentsMargins(10, 2, 0, 2);
    statusBar()->addWidget(status_, 1);
    auto *version = label("v" + appVersion(), "Muted");
    version->setContentsMargins(0, 2, 10, 2);
    statusBar()->addPermanentWidget(version);
    statusBar()->setSizeGripEnabled(false);

    buildMenus();
    refreshPanel();
    connect(&loader_, &QFutureWatcher<LoadResult>::finished, this, &MainWindow::onLoaded);

    QSettings s;
    if (s.contains("window/geometry")) restoreGeometry(s.value("window/geometry").toByteArray());
    setupUpdater();
}

MainWindow::~MainWindow() = default;

void MainWindow::buildMenus() {
    QMenu *file = menuBar()->addMenu(tr("&File"));
    QAction *open = file->addAction(tr("&Open…"), this, &MainWindow::chooseFile);
    open->setShortcut(QKeySequence::Open);
    QAction *close = file->addAction(tr("&Close model"), this, &MainWindow::closeModel);
    close->setShortcut(QKeySequence(Qt::CTRL | Qt::Key_W));
    file->addSeparator();
    QAction *quit = file->addAction(tr("E&xit"), this, &QWidget::close);
    quit->setShortcut(QKeySequence(Qt::ALT | Qt::Key_F4));

    QMenu *view = menuBar()->addMenu(tr("&View"));
    view->addAction(tr("&Fit model"), QKeySequence(Qt::Key_F), viewport_, &Viewport::fitView);
    view->addAction(tr("&Reset view"), QKeySequence(Qt::Key_Home), viewport_, &Viewport::resetView);
    view->addSeparator();
    view->addAction(tr("&Top"), QKeySequence(Qt::Key_T), viewport_, &Viewport::setViewTop);
    view->addAction(tr("F&ront"), QKeySequence(Qt::Key_R), viewport_, &Viewport::setViewFront);

    QMenu *help = menuBar()->addMenu(tr("&Help"));
    help->addAction(tr("Check for &updates…"), this, &MainWindow::checkForUpdates);
    help->addAction(tr("Found a &bug?"), this, [] { QDesktopServices::openUrl(QUrl("mailto:bug@stlware.com?subject=STLware%20desktop%20" + appVersion())); });
    help->addAction(tr("stlware.com"), this, [] { QDesktopServices::openUrl(QUrl("https://stlware.com")); });
    help->addSeparator();
    help->addAction(tr("&About STLware"), this, &MainWindow::showAbout);
}

QWidget *MainWindow::buildTopBar() {
    auto *bar = new QWidget;
    bar->setObjectName("TopBar");
    bar->setAttribute(Qt::WA_StyledBackground);
    bar->setFixedHeight(52);
    auto *l = new QHBoxLayout(bar);
    l->setContentsMargins(16, 0, 12, 0);
    l->setSpacing(10);
    auto *logo = new QLabel;
    logo->setPixmap(QPixmap(":/logo.png").scaled(26, 26, Qt::KeepAspectRatio, Qt::SmoothTransformation));
    l->addWidget(logo);
    l->addWidget(label("STLware", "Brand"));
    l->addSpacing(12);
    fileName_ = label("", "FileName");
    l->addWidget(fileName_, 1);
    auto *open = new QPushButton(tr("Open…"));
    open->setCursor(Qt::PointingHandCursor);
    connect(open, &QPushButton::clicked, this, &MainWindow::chooseFile);
    l->addWidget(open);
    return bar;
}

QWidget *MainWindow::buildUpdateBar() {
    updateBar_ = new QWidget;
    updateBar_->setObjectName("UpdateBar");
    updateBar_->setAttribute(Qt::WA_StyledBackground);
    auto *l = new QHBoxLayout(updateBar_);
    l->setContentsMargins(16, 8, 12, 8);
    updateText_ = new QLabel;
    l->addWidget(updateText_, 1);
    updateProgress_ = new QProgressBar;
    updateProgress_->setFixedWidth(180);
    updateProgress_->setFixedHeight(8);
    updateProgress_->setTextVisible(false);
    updateProgress_->hide();
    l->addWidget(updateProgress_);
    updateLater_ = new QPushButton(tr("Later"));
    updateNow_ = new QPushButton(tr("Update now"));
    updateNow_->setObjectName("Primary");
    l->addWidget(updateLater_);
    l->addWidget(updateNow_);
    updateBar_->hide();
    return updateBar_;
}

QWidget *MainWindow::buildSidePanel() {
    side_ = new QWidget;
    side_->setObjectName("SidePanel");
    side_->setAttribute(Qt::WA_StyledBackground);
    side_->setFixedWidth(300);
    auto *outer = new QVBoxLayout(side_);
    outer->setContentsMargins(0, 0, 0, 0);
    auto *scroll = new QScrollArea;
    scroll->setWidgetResizable(true);
    scroll->setHorizontalScrollBarPolicy(Qt::ScrollBarAlwaysOff);
    auto *inner = new QWidget;
    inner->setAttribute(Qt::WA_TranslucentBackground);
    sideLayout_ = new QVBoxLayout(inner);
    sideLayout_->setContentsMargins(16, 16, 16, 16);
    sideLayout_->setSpacing(10);
    scroll->setWidget(inner);
    scroll->viewport()->setAutoFillBackground(false);
    outer->addWidget(scroll);
    return side_;
}

void MainWindow::refreshPanel() {
    while (QLayoutItem *item = sideLayout_->takeAt(0)) {
        if (item->widget()) item->widget()->deleteLater();
        if (item->layout()) {
            while (QLayoutItem *sub = item->layout()->takeAt(0)) {
                if (sub->widget()) sub->widget()->deleteLater();
                delete sub;
            }
        }
        delete item;
    }
    sideLayout_->addWidget(label(tr("Model"), "SectionTitle"));
    auto *card = new QWidget;
    card->setObjectName("Card");
    card->setAttribute(Qt::WA_StyledBackground);
    auto *grid = new QGridLayout(card);
    grid->setContentsMargins(14, 12, 14, 12);
    grid->setHorizontalSpacing(12);
    grid->setVerticalSpacing(8);
    int row = 0;
    auto add = [&](const QString &k, const QString &v) {
        grid->addWidget(label(k, "Muted"), row, 0);
        auto *val = label(v, "Value");
        val->setTextInteractionFlags(Qt::TextSelectableByMouse);
        val->setWordWrap(true);
        grid->addWidget(val, row++, 1);
    };
    if (!model_) {
        add(tr("File"), tr("none"));
    } else {
        const auto b = model_->bounds();
        add(tr("Triangles"), formatNumber(qint64(model_->triangleCount())));
        add(tr("Size"), QString("%1 × %2 × %3 mm").arg(formatMm(b[3] - b[0]), formatMm(b[4] - b[1]), formatMm(b[5] - b[2])));
        add(tr("Objects"), QString::number(model_->objectNames.size()));
        const QString src = model_->source == "bambu" ? tr("Bambu Studio / OrcaSlicer project")
                            : model_->source == "prusa" ? tr("PrusaSlicer project")
                            : model_->source == "3mf"   ? tr("3MF")
                                                        : tr("STL");
        add(tr("Format"), src);
    }
    grid->setColumnStretch(1, 1);
    sideLayout_->addWidget(card);

    if (model_ && model_->source != "stl") {
        sideLayout_->addSpacing(8);
        sideLayout_->addWidget(label(tr("Colours"), "SectionTitle"));
        std::vector<size_t> counts(model_->palette.size(), 0);
        for (uint8_t c : model_->colours)
            if (c < counts.size()) counts[c]++;
        auto *colours = new QWidget;
        colours->setObjectName("Card");
        colours->setAttribute(Qt::WA_StyledBackground);
        auto *cl = new QVBoxLayout(colours);
        cl->setContentsMargins(14, 10, 14, 10);
        cl->setSpacing(8);
        for (size_t i = 0; i < model_->palette.size(); i++) {
            auto *r = new QHBoxLayout;
            auto *sw = new QLabel;
            sw->setFixedSize(18, 18);
            sw->setStyleSheet(QString("background:%1;border-radius:5px;border:1px solid rgba(255,255,255,40);")
                                  .arg(QString::fromStdString(model_->palette[i])));
            r->addWidget(sw);
            r->addWidget(label(QString::fromStdString(model_->names[i]), "Value"), 1);
            const double pct = model_->triangleCount() ? 100.0 * double(counts[i]) / double(model_->triangleCount()) : 0;
            r->addWidget(label(QString::number(pct, 'f', pct < 10 ? 1 : 0) + " %", "Muted"));
            cl->addLayout(r);
        }
        sideLayout_->addWidget(colours);
    }
    sideLayout_->addSpacing(8);
    auto *note = label(tr("Painting, cutting and export are coming to the desktop app next. "
                          "Until then they work in the web editor at stlware.com/editor."),
                       "Muted");
    note->setWordWrap(true);
    sideLayout_->addWidget(note);
    sideLayout_->addStretch();
}

void MainWindow::chooseFile() {
    QSettings s;
    const QString dir = s.value("lastDir").toString();
    const QString path = QFileDialog::getOpenFileName(this, tr("Open model"), dir, tr("3D models (*.stl *.3mf);;All files (*)"));
    if (!path.isEmpty()) openFile(path);
}

void MainWindow::openFile(const QString &path) {
    if (loader_.isRunning()) return;
    if (!supported(path)) {
        QMessageBox::warning(this, tr("Open model"), tr("STLware opens STL and 3MF files."));
        return;
    }
    QSettings().setValue("lastDir", QFileInfo(path).absolutePath());
    status_->setText(tr("Opening %1…").arg(QFileInfo(path).fileName()));
    QApplication::setOverrideCursor(Qt::BusyCursor);
    loader_.setFuture(QtConcurrent::run(loadFile, path));
}

void MainWindow::onLoaded() {
    QApplication::restoreOverrideCursor();
    LoadResult r = loader_.result();
    if (!r.error.isEmpty()) {
        status_->setText(tr("Could not open %1").arg(QFileInfo(r.path).fileName()));
        QMessageBox::warning(this, tr("Open model"), tr("%1 could not be opened.\n\n%2").arg(QFileInfo(r.path).fileName(), r.error));
        return;
    }
    model_ = r.model;
    path_ = r.path;
    viewport_->setModel(*model_, std::move(r.vertices));
    fileName_->setText(QFileInfo(path_).fileName());
    setWindowTitle(QFileInfo(path_).fileName() + " — STLware");
    empty_->hide();
    status_->setText(tr("Opened %1 (%2 triangles) in %3 s")
                         .arg(QFileInfo(path_).fileName(), formatNumber(qint64(model_->triangleCount())))
                         .arg(double(r.millis) / 1000.0, 0, 'f', 1));
    refreshPanel();
}

void MainWindow::closeModel() {
    model_.reset();
    path_.clear();
    viewport_->clear();
    fileName_->clear();
    setWindowTitle("STLware");
    empty_->show();
    status_->clear();
    refreshPanel();
}

void MainWindow::dragEnterEvent(QDragEnterEvent *e) {
    const auto urls = e->mimeData()->urls();
    if (!urls.isEmpty() && urls.first().isLocalFile() && supported(urls.first().toLocalFile())) e->acceptProposedAction();
}

void MainWindow::dropEvent(QDropEvent *e) {
    const auto urls = e->mimeData()->urls();
    if (!urls.isEmpty() && urls.first().isLocalFile()) openFile(urls.first().toLocalFile());
}

void MainWindow::resizeEvent(QResizeEvent *e) {
    QMainWindow::resizeEvent(e);
    placeOverlay();
}

void MainWindow::placeOverlay() {
    if (empty_ && viewport_) empty_->setGeometry(viewport_->rect());
}

void MainWindow::closeEvent(QCloseEvent *e) {
    QSettings().setValue("window/geometry", saveGeometry());
    QMainWindow::closeEvent(e);
}

void MainWindow::showAbout() {
    QMessageBox box(this);
    box.setWindowTitle(tr("About STLware"));
    box.setIconPixmap(QPixmap(":/logo.png").scaled(64, 64, Qt::KeepAspectRatio, Qt::SmoothTransformation));
    box.setText(QString("<b>STLware</b> %1").arg(appVersion()));
    box.setInformativeText(tr("Paint and split 3D models for multi-colour printing in Bambu Studio and OrcaSlicer.<br><br>"
                              "Build %1<br><a href=\"https://stlware.com\" style=\"color:#f4f5f7\">stlware.com</a>")
                               .arg(QStringLiteral(__DATE__)));
    box.setTextFormat(Qt::RichText);
    box.exec();
}

// --- updates ---------------------------------------------------------------------------

void MainWindow::setupUpdater() {
    updater_ = new Updater(this);
    connect(updater_, &Updater::updateAvailable, this, [this](const QString &version, const QString &, qint64 bytes, int files) {
        if (!Updater::isInstalled()) {
            updateText_->setText(tr("STLware %1 is available. Download it from stlware.com.").arg(version));
            updateNow_->hide();
        } else {
            const QString size = bytes < 1024 * 1024 ? QString::number(qMax<qint64>(1, bytes / 1024)) + " KB"
                                                     : QString::number(double(bytes) / 1048576.0, 'f', 1) + " MB";
            updateText_->setText(tr("STLware %1 is available. The update downloads only what changed (%2 files, %3).")
                                     .arg(version)
                                     .arg(files)
                                     .arg(size));
            updateNow_->setText(tr("Update now"));
            updateNow_->show();
        }
        updateLater_->show();
        updateProgress_->hide();
        updateBar_->show();
    });
    connect(updater_, &Updater::upToDate, this, [this] {
        if (manualCheck_) QMessageBox::information(this, tr("Updates"), tr("You have the latest version of STLware (%1).").arg(appVersion()));
    });
    connect(updater_, &Updater::checkFailed, this, [this](const QString &msg) {
        if (manualCheck_) QMessageBox::warning(this, tr("Updates"), msg);
    });
    connect(updater_, &Updater::progress, this, [this](qint64 done, qint64 total) {
        updateProgress_->setMaximum(1000);
        updateProgress_->setValue(total > 0 ? int(done * 1000 / total) : 1000);
    });
    connect(updater_, &Updater::readyToRestart, this, [this] {
        updateProgress_->hide();
        updateText_->setText(tr("STLware %1 is downloaded. Restart to finish the update.").arg(updater_->availableVersion()));
        updateNow_->setText(tr("Restart now"));
        updateNow_->setEnabled(true);
        updateNow_->show();
        updateLater_->show();
    });
    connect(updater_, &Updater::downloadFailed, this, [this](const QString &msg) {
        updateProgress_->hide();
        updateText_->setText(msg);
        updateNow_->setText(tr("Try again"));
        updateNow_->setEnabled(true);
        updateLater_->show();
    });
    connect(updateLater_, &QPushButton::clicked, this, [this] {
        updater_->cancel();
        updateBar_->hide();
    });
    connect(updateNow_, &QPushButton::clicked, this, [this] {
        if (updateNow_->text() == tr("Restart now")) {
            updater_->restartAndInstall();
            return;
        }
        updateText_->setText(tr("Downloading STLware %1…").arg(updater_->availableVersion()));
        updateProgress_->setValue(0);
        updateProgress_->show();
        updateNow_->setEnabled(false);
        updater_->download();
    });
    // Look for an update a few seconds after start, without bothering anyone if there is none.
    QTimer::singleShot(4000, this, [this] {
        manualCheck_ = false;
        updater_->check(true);
    });
}

void MainWindow::checkForUpdates() {
    manualCheck_ = true;
    updater_->check(false);
}

} // namespace stlware
