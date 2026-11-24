#include "Updater.h"

#include "Version.h"

#include <QCoreApplication>
#include <QCryptographicHash>
#include <QDir>
#include <QFile>
#include <QFileInfo>
#include <QJsonArray>
#include <QJsonDocument>
#include <QJsonObject>
#include <QNetworkReply>
#include <QNetworkRequest>
#include <QProcess>
#include <QSaveFile>
#include <QSet>
#include <QStandardPaths>
#include <QUrl>

namespace stlware {

namespace {

const char *RELEASE_HOST_PREFIX = "https://github.com/metjus/stlware/releases/";
const char *INSTALLED_MANIFEST = "manifest.json";

QString fileSha256(const QString &path) {
    QFile f(path);
    if (!f.open(QIODevice::ReadOnly)) return {};
    QCryptographicHash h(QCryptographicHash::Sha256);
    h.addData(&f);
    return QString::fromLatin1(h.result().toHex());
}

QString updaterName() {
#ifdef Q_OS_WIN
    return QStringLiteral("stlware-updater.exe");
#else
    return QStringLiteral("stlware-updater");
#endif
}

/** A manifest path must stay inside the installation folder. */
bool safeRelativePath(const QString &p) {
    if (p.isEmpty() || QDir::isAbsolutePath(p) || p.contains('\\') || p.contains(':')) return false;
    for (const QString &part : p.split('/'))
        if (part.isEmpty() || part == "." || part == "..") return false;
    return true;
}

} // namespace

Updater::Updater(QObject *parent) : QObject(parent) {}

QString Updater::manifestUrl() {
    return QStringLiteral("https://github.com/metjus/stlware/releases/latest/download/desktop-manifest.json");
}

bool Updater::isInstalled() {
    const QString dir = QCoreApplication::applicationDirPath();
    return QFile::exists(dir + "/" + INSTALLED_MANIFEST) && QFile::exists(dir + "/" + updaterName());
}

QString Updater::stagingDir() const {
    return QStandardPaths::writableLocation(QStandardPaths::AppLocalDataLocation) + "/update/" + newVersion_;
}

void Updater::check(bool quiet) {
    if (busy_) return;
    QNetworkRequest req{QUrl(manifestUrl())};
    req.setAttribute(QNetworkRequest::RedirectPolicyAttribute, QNetworkRequest::NoLessSafeRedirectPolicy);
    req.setAttribute(QNetworkRequest::CacheLoadControlAttribute, QNetworkRequest::AlwaysNetwork);
    req.setHeader(QNetworkRequest::UserAgentHeader, "STLware/" + appVersion());
    req.setTransferTimeout(20000);
    QNetworkReply *reply = net_.get(req);
    connect(reply, &QNetworkReply::finished, this, [this, reply, quiet] { onManifest(reply, quiet); });
}

void Updater::onManifest(QNetworkReply *reply, bool quiet) {
    reply->deleteLater();
    if (reply->error() != QNetworkReply::NoError) {
        if (!quiet) emit checkFailed(tr("Could not reach the update server (%1).").arg(reply->errorString()));
        return;
    }
    const QByteArray body = reply->readAll();
    const QJsonDocument doc = QJsonDocument::fromJson(body);
    const QJsonObject o = doc.object();
    const QString version = o.value("version").toString();
    if (version.isEmpty()) {
        if (!quiet) emit checkFailed(tr("The update information could not be read."));
        return;
    }
    if (compareVersions(version, appVersion()) <= 0) {
        if (!quiet) emit upToDate();
        return;
    }
    all_.clear();
    for (const QJsonValue &v : o.value("files").toArray()) {
        const QJsonObject f = v.toObject();
        FileEntry e{f.value("path").toString(), f.value("sha256").toString().toLower(), qint64(f.value("size").toDouble()),
                    f.value("url").toString()};
        if (!safeRelativePath(e.path) || e.sha256.size() != 64 || !e.url.startsWith(RELEASE_HOST_PREFIX)) {
            if (!quiet) emit checkFailed(tr("The update information is not valid."));
            return;
        }
        all_.push_back(e);
    }
    newVersion_ = version;
    notes_ = o.value("notes").toString();
    manifestJson_ = body;

    // Which files differ from this installation, and which are gone in the new version.
    const QString dir = QCoreApplication::applicationDirPath();
    changed_.clear();
    totalBytes_ = 0;
    QSet<QString> newPaths;
    for (const FileEntry &e : all_) {
        newPaths.insert(e.path);
        if (fileSha256(dir + "/" + e.path) != e.sha256) {
            changed_.push_back(e);
            totalBytes_ += e.size;
        }
    }
    removed_.clear();
    QFile installed(dir + "/" + INSTALLED_MANIFEST);
    if (installed.open(QIODevice::ReadOnly)) {
        for (const QJsonValue &v : QJsonDocument::fromJson(installed.readAll()).object().value("files").toArray()) {
            const QString p = v.toObject().value("path").toString();
            if (safeRelativePath(p) && !newPaths.contains(p)) removed_ << p;
        }
    }
    emit updateAvailable(newVersion_, notes_, totalBytes_, int(changed_.size()));
}

void Updater::download() {
    if (busy_ || newVersion_.isEmpty()) return;
    busy_ = true;
    QDir(stagingDir()).removeRecursively();
    QDir().mkpath(stagingDir() + "/files");
    current_ = -1;
    doneBytes_ = 0;
    nextDownload();
}

void Updater::cancel() {
    if (reply_) reply_->abort();
}

void Updater::nextDownload() {
    current_++;
    if (current_ >= changed_.size()) {
        busy_ = false;
        emit progress(totalBytes_, totalBytes_);
        emit readyToRestart();
        return;
    }
    const FileEntry e = changed_[current_];
    const QString target = stagingDir() + "/files/" + e.path;
    QDir().mkpath(QFileInfo(target).absolutePath());
    QNetworkRequest req{QUrl(e.url)};
    req.setAttribute(QNetworkRequest::RedirectPolicyAttribute, QNetworkRequest::NoLessSafeRedirectPolicy);
    req.setHeader(QNetworkRequest::UserAgentHeader, "STLware/" + appVersion());
    req.setTransferTimeout(60000);
    auto *file = new QFile(target, this);
    if (!file->open(QIODevice::WriteOnly)) {
        busy_ = false;
        delete file;
        emit downloadFailed(tr("Could not write the update to %1.").arg(QDir::toNativeSeparators(target)));
        return;
    }
    out_ = file;
    QNetworkReply *reply = net_.get(req);
    reply_ = reply;
    const qint64 base = doneBytes_;
    connect(reply, &QNetworkReply::readyRead, this, [this, reply] {
        if (out_) out_->write(reply->readAll());
    });
    connect(reply, &QNetworkReply::downloadProgress, this, [this, base](qint64 got, qint64) { emit progress(base + got, totalBytes_); });
    connect(reply, &QNetworkReply::finished, this, [this, reply, e] {
        reply->deleteLater();
        out_->write(reply->readAll());
        out_->close();
        const QString path = out_->fileName();
        out_->deleteLater();
        out_ = nullptr;
        if (reply->error() != QNetworkReply::NoError) {
            busy_ = false;
            emit downloadFailed(reply->error() == QNetworkReply::OperationCanceledError ? tr("The update was cancelled.")
                                                                                         : tr("Download failed: %1").arg(reply->errorString()));
            return;
        }
        if (fileSha256(path) != e.sha256) {
            busy_ = false;
            emit downloadFailed(tr("A downloaded file was damaged (%1). Please try again.").arg(e.path));
            return;
        }
        doneBytes_ += e.size;
        nextDownload();
    });
}

void Updater::restartAndInstall() {
    const QString appDir = QCoreApplication::applicationDirPath();
    const QString staging = stagingDir();
    QSaveFile manifest(staging + "/files/" + INSTALLED_MANIFEST);
    if (manifest.open(QIODevice::WriteOnly)) {
        manifest.write(manifestJson_);
        manifest.commit();
    }
    QStringList plan;
    plan << QString("wait\t%1").arg(QCoreApplication::applicationPid());
    for (const FileEntry &e : changed_) plan << QString("copy\t%1\t%2").arg(staging + "/files/" + e.path, appDir + "/" + e.path);
    plan << QString("copy\t%1\t%2").arg(staging + "/files/" + INSTALLED_MANIFEST, appDir + "/" + INSTALLED_MANIFEST);
    for (const QString &p : removed_) plan << QString("delete\t%1").arg(appDir + "/" + p);
    plan << QString("launch\t%1").arg(QCoreApplication::applicationFilePath());
    QSaveFile planFile(staging + "/plan.txt");
    if (!planFile.open(QIODevice::WriteOnly)) {
        emit downloadFailed(tr("Could not prepare the update."));
        return;
    }
    planFile.write(plan.join('\n').toUtf8() + '\n');
    planFile.commit();

    // Run a copy of the updater so that it can replace itself too.
    QString updaterSource = staging + "/files/" + updaterName();
    if (!QFile::exists(updaterSource)) updaterSource = appDir + "/" + updaterName();
    const QString runner = staging + "/" + updaterName();
    QFile::remove(runner);
    if (!QFile::copy(updaterSource, runner)) {
        emit downloadFailed(tr("Could not start the updater."));
        return;
    }
    QFile(runner).setPermissions(QFile(runner).permissions() | QFileDevice::ExeOwner);
    if (!QProcess::startDetached(runner, {staging + "/plan.txt"}, staging)) {
        emit downloadFailed(tr("Could not start the updater."));
        return;
    }
    QCoreApplication::quit();
}

} // namespace stlware
