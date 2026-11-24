#pragma once
// Checks for a newer STLware and installs it as an update of this installation.
//
// Each release publishes desktop-manifest.json: the version and every file of the installation
// with its SHA-256 and download URL. Only files whose hash differs from the installed copy are
// downloaded. stlware-updater then swaps them in after the app has closed and starts it again.

#include <QNetworkAccessManager>
#include <QObject>
#include <QPointer>
#include <QString>
#include <QVector>

class QNetworkReply;
class QFile;

namespace stlware {

class Updater : public QObject {
    Q_OBJECT
public:
    explicit Updater(QObject *parent = nullptr);

    /** Where releases publish the manifest. */
    static QString manifestUrl();
    /** True when this copy was installed by the installer (it can update itself). */
    static bool isInstalled();

    /** Look for a newer version. `quiet`: report nothing when there is none or the check fails. */
    void check(bool quiet);
    /** Download the changed files of the version found by check(), then emit readyToRestart. */
    void download();
    /** Start the updater and quit the app. */
    void restartAndInstall();
    void cancel();

    QString availableVersion() const { return newVersion_; }
    QString notes() const { return notes_; }

signals:
    void updateAvailable(const QString &version, const QString &notes, qint64 downloadBytes, int files);
    void upToDate();
    void checkFailed(const QString &message);
    void progress(qint64 done, qint64 total);
    void readyToRestart();
    void downloadFailed(const QString &message);

private:
    struct FileEntry {
        QString path;
        QString sha256;
        qint64 size = 0;
        QString url;
    };
    void onManifest(QNetworkReply *reply, bool quiet);
    void nextDownload();
    QString stagingDir() const;

    QNetworkAccessManager net_;
    QString newVersion_, notes_;
    QByteArray manifestJson_;
    QVector<FileEntry> all_, changed_;
    QStringList removed_;
    int current_ = -1;
    qint64 doneBytes_ = 0, totalBytes_ = 0;
    QPointer<QNetworkReply> reply_;
    QFile *out_ = nullptr;
    bool busy_ = false;
};

} // namespace stlware
