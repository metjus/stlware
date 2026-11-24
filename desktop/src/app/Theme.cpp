#include "Theme.h"

#include <QApplication>
#include <QFont>
#include <QPalette>
#include <QStyleFactory>

namespace stlware {

// Same colours as the web editor (src/style.css, "calm, neutral" look).
static const char *STYLE = R"(
* { outline: 0; }
QMainWindow, QDialog { background: #0b0c0f; }
QWidget { color: #ececf1; }
QToolTip { background: #1c1f25; color: #ececf1; border: 1px solid #24272e; padding: 4px 6px; }

QMenuBar { background: #101115; border-bottom: 1px solid #24272e; padding: 2px 4px; }
QMenuBar::item { background: transparent; padding: 5px 10px; border-radius: 6px; }
QMenuBar::item:selected { background: #1c1f25; }
QMenu { background: #15171c; border: 1px solid #24272e; padding: 4px; }
QMenu::item { padding: 6px 22px 6px 12px; border-radius: 6px; }
QMenu::item:selected { background: #24272e; }
QMenu::item:disabled { color: #5c616b; }
QMenu::separator { height: 1px; background: #24272e; margin: 4px 6px; }

#TopBar { background: #101115; border-bottom: 1px solid #24272e; }
#Brand { font-size: 15px; font-weight: 600; letter-spacing: 0.2px; }
#FileName { color: #8b909b; }

#SidePanel { background: #101115; border-left: 1px solid #24272e; }
#SectionTitle { color: #8b909b; font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }
#Muted { color: #8b909b; }
#Value { color: #ececf1; }
#Card { background: #15171c; border: 1px solid #24272e; border-radius: 10px; }

QPushButton {
  background: #1c1f25; color: #ececf1; border: 1px solid #2c3038; border-radius: 8px;
  padding: 6px 14px; min-height: 20px;
}
QPushButton:hover { background: #24272e; }
QPushButton:pressed { background: #15171c; }
QPushButton:disabled { color: #5c616b; }
QPushButton#Primary { background: #f4f5f7; color: #0b0c0f; border: 1px solid #f4f5f7; font-weight: 600; }
QPushButton#Primary:hover { background: #ffffff; }

#EmptyState { background: transparent; }
#EmptyTitle { font-size: 20px; font-weight: 600; }
#DropHint { color: #8b909b; }

#UpdateBar { background: #15171c; border-bottom: 1px solid #24272e; }

QStatusBar { background: #101115; border-top: 1px solid #24272e; color: #8b909b; }
QStatusBar::item { border: 0; }

QScrollArea { background: transparent; border: 0; }
QScrollBar:vertical { background: transparent; width: 10px; margin: 2px; }
QScrollBar::handle:vertical { background: #2c3038; border-radius: 4px; min-height: 24px; }
QScrollBar::add-line, QScrollBar::sub-line { height: 0; }
QProgressBar { background: #15171c; border: 1px solid #24272e; border-radius: 6px; height: 8px; text-align: center; color: transparent; }
QProgressBar::chunk { background: #f4f5f7; border-radius: 5px; }
)";

void applyTheme(QApplication &app) {
    app.setStyle(QStyleFactory::create("Fusion"));
    QPalette p;
    const QColor bg("#0b0c0f"), panel("#15171c"), panel2("#1c1f25"), text("#ececf1"), muted("#8b909b"), line("#24272e");
    p.setColor(QPalette::Window, bg);
    p.setColor(QPalette::WindowText, text);
    p.setColor(QPalette::Base, panel);
    p.setColor(QPalette::AlternateBase, panel2);
    p.setColor(QPalette::Text, text);
    p.setColor(QPalette::Button, panel2);
    p.setColor(QPalette::ButtonText, text);
    p.setColor(QPalette::ToolTipBase, panel2);
    p.setColor(QPalette::ToolTipText, text);
    p.setColor(QPalette::PlaceholderText, muted);
    p.setColor(QPalette::Highlight, QColor("#f4f5f7"));
    p.setColor(QPalette::HighlightedText, bg);
    p.setColor(QPalette::Link, QColor("#f4f5f7"));
    p.setColor(QPalette::Mid, line);
    p.setColor(QPalette::Disabled, QPalette::Text, QColor("#5c616b"));
    p.setColor(QPalette::Disabled, QPalette::ButtonText, QColor("#5c616b"));
    p.setColor(QPalette::Disabled, QPalette::WindowText, QColor("#5c616b"));
    app.setPalette(p);
    QFont f = app.font();
#ifdef Q_OS_WIN
    f.setFamily("Segoe UI");
#endif
    f.setPointSizeF(9.5);
    app.setFont(f);
    app.setStyleSheet(STYLE);
}

} // namespace stlware
