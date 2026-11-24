#include "Viewport.h"

#include <QMouseEvent>
#include <QOpenGLContext>
#include <QPainter>
#include <QWheelEvent>

#include <algorithm>
#include <cmath>

namespace stlware {

namespace {

const char *MESH_VS = R"(#version 330 core
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec3 aNormal;
layout(location = 2) in vec4 aColour;
uniform mat4 uMvp;
uniform mat4 uView;
out vec3 vNormal;   // view space
out vec3 vViewPos;  // view space
out vec3 vColour;
void main() {
  vec4 vp = uView * vec4(aPos, 1.0);
  vViewPos = vp.xyz;
  vNormal = mat3(uView) * aNormal;
  vColour = aColour.rgb;
  gl_Position = uMvp * vec4(aPos, 1.0);
}
)";

// Lighting close to the web editor: a hemisphere light (sky white, ground blue-grey) plus a key
// and a fill light that follow the camera, so every side you turn to is lit.
const char *MESH_FS = R"(#version 330 core
in vec3 vNormal;
in vec3 vViewPos;
in vec3 vColour;
uniform mat4 uView;
out vec4 fragColour;
vec3 toLinear(vec3 c) { return pow(c, vec3(2.2)); }
vec3 toSrgb(vec3 c) { return pow(c, vec3(1.0 / 2.2)); }
void main() {
  vec3 n = normalize(vNormal);
  vec3 toEye = normalize(-vViewPos);
  if (dot(n, toEye) < 0.0) n = -n;  // inside faces and inverted triangles: light them like the outside
  vec3 base = toLinear(vColour);
  vec3 worldUp = normalize(mat3(uView) * vec3(0.0, 0.0, 1.0));
  float h = dot(n, worldUp) * 0.5 + 0.5;
  vec3 hemi = mix(toLinear(vec3(0.227, 0.247, 0.290)), vec3(1.0), h) * 0.42;
  vec3 keyDir = normalize(vec3(-0.35, 0.55, 0.75));
  vec3 fillDir = normalize(vec3(0.6, -0.25, 0.5));
  float key = max(dot(n, keyDir), 0.0) * 0.62;
  float fill = max(dot(n, fillDir), 0.0) * 0.18;
  vec3 halfV = normalize(keyDir + toEye);
  float spec = pow(max(dot(n, halfV), 0.0), 48.0) * 0.06;
  vec3 c = base * (hemi + key + fill) + spec;
  fragColour = vec4(toSrgb(c), 1.0);
}
)";

const char *LINE_VS = R"(#version 330 core
layout(location = 0) in vec3 aPos;
layout(location = 1) in vec4 aColour;
uniform mat4 uMvp;
out vec4 vColour;
void main() { vColour = aColour; gl_Position = uMvp * vec4(aPos, 1.0); }
)";

const char *LINE_FS = R"(#version 330 core
in vec4 vColour;
out vec4 fragColour;
void main() { fragColour = vColour; }
)";

// Full-screen triangle with a soft vertical gradient.
const char *BG_VS = R"(#version 330 core
out float vY;
void main() {
  vec2 p = vec2((gl_VertexID == 1) ? 3.0 : -1.0, (gl_VertexID == 2) ? 3.0 : -1.0);
  vY = p.y * 0.5 + 0.5;
  gl_Position = vec4(p, 0.999, 1.0);
}
)";

const char *BG_FS = R"(#version 330 core
in float vY;
out vec4 fragColour;
void main() {
  vec3 top = vec3(0.090, 0.098, 0.118);
  vec3 bottom = vec3(0.043, 0.047, 0.059);
  fragColour = vec4(mix(bottom, top, clamp(vY, 0.0, 1.0)), 1.0);
}
)";

struct LineVertex {
    float pos[3];
    uint8_t colour[4];
};

} // namespace

std::vector<MeshVertex> buildMeshVertices(const Model &model) {
    const size_t n = model.triangleCount();
    std::vector<MeshVertex> out(n * 3);
    std::vector<Colour> pal;
    for (const auto &hex : model.palette) pal.push_back(parseHex(hex));
    if (pal.empty()) pal.push_back(Colour{200, 200, 205});
    const float *p = model.positions.data();
    for (size_t t = 0; t < n; t++) {
        const float *v = p + t * 9;
        float ux = v[3] - v[0], uy = v[4] - v[1], uz = v[5] - v[2];
        float wx = v[6] - v[0], wy = v[7] - v[1], wz = v[8] - v[2];
        float nx = uy * wz - uz * wy, ny = uz * wx - ux * wz, nz = ux * wy - uy * wx;
        float len = std::sqrt(nx * nx + ny * ny + nz * nz);
        if (len > 0) nx /= len, ny /= len, nz /= len;
        const uint8_t ci = t < model.colours.size() ? model.colours[t] : 0;
        const Colour c = pal[ci < pal.size() ? ci : 0];
        for (int k = 0; k < 3; k++) {
            MeshVertex &mv = out[t * 3 + k];
            mv.pos[0] = v[k * 3];
            mv.pos[1] = v[k * 3 + 1];
            mv.pos[2] = v[k * 3 + 2];
            mv.normal[0] = nx;
            mv.normal[1] = ny;
            mv.normal[2] = nz;
            mv.colour[0] = c.r;
            mv.colour[1] = c.g;
            mv.colour[2] = c.b;
            mv.colour[3] = 255;
        }
    }
    return out;
}

Viewport::Viewport(QWidget *parent) : QOpenGLWidget(parent) {
    setFocusPolicy(Qt::StrongFocus);
    setMouseTracking(false);
    setMinimumSize(200, 200);
}

Viewport::~Viewport() { releaseGL(); }

void Viewport::releaseGL() {
    if (!glReady_ || !context()) return;
    makeCurrent();
    meshVbo_.destroy();
    gridVbo_.destroy();
    meshVao_.destroy();
    gridVao_.destroy();
    bgVao_.destroy();
    meshProg_.reset();
    lineProg_.reset();
    bgProg_.reset();
    glReady_ = false;
    doneCurrent();
}

void Viewport::initializeGL() {
    initializeOpenGLFunctions();
    connect(context(), &QOpenGLContext::aboutToBeDestroyed, this, &Viewport::releaseGL, Qt::DirectConnection);

    auto build = [this](const char *vs, const char *fs) {
        auto prog = std::make_unique<QOpenGLShaderProgram>();
        if (!prog->addShaderFromSourceCode(QOpenGLShader::Vertex, vs) || !prog->addShaderFromSourceCode(QOpenGLShader::Fragment, fs) ||
            !prog->link()) {
            emit glError(prog->log());
            return std::unique_ptr<QOpenGLShaderProgram>();
        }
        return prog;
    };
    meshProg_ = build(MESH_VS, MESH_FS);
    lineProg_ = build(LINE_VS, LINE_FS);
    bgProg_ = build(BG_VS, BG_FS);
    if (!meshProg_ || !lineProg_ || !bgProg_) return;

    meshVao_.create();
    meshVbo_.create();
    meshVao_.bind();
    meshVbo_.bind();
    glEnableVertexAttribArray(0);
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, sizeof(MeshVertex), reinterpret_cast<void *>(offsetof(MeshVertex, pos)));
    glEnableVertexAttribArray(1);
    glVertexAttribPointer(1, 3, GL_FLOAT, GL_FALSE, sizeof(MeshVertex), reinterpret_cast<void *>(offsetof(MeshVertex, normal)));
    glEnableVertexAttribArray(2);
    glVertexAttribPointer(2, 4, GL_UNSIGNED_BYTE, GL_TRUE, sizeof(MeshVertex), reinterpret_cast<void *>(offsetof(MeshVertex, colour)));
    meshVao_.release();

    gridVao_.create();
    gridVbo_.create();
    gridVao_.bind();
    gridVbo_.bind();
    glEnableVertexAttribArray(0);
    glVertexAttribPointer(0, 3, GL_FLOAT, GL_FALSE, sizeof(LineVertex), reinterpret_cast<void *>(offsetof(LineVertex, pos)));
    glEnableVertexAttribArray(1);
    glVertexAttribPointer(1, 4, GL_UNSIGNED_BYTE, GL_TRUE, sizeof(LineVertex), reinterpret_cast<void *>(offsetof(LineVertex, colour)));
    gridVao_.release();

    bgVao_.create();
    glReady_ = true;
    rebuildGrid();
}

void Viewport::resizeGL(int, int) {}

void Viewport::setModel(const Model &model, std::vector<MeshVertex> vertices) {
    bounds_ = model.bounds();
    pending_ = std::move(vertices);
    pendingUpload_ = true;
    resetView();
    if (glReady_) {
        makeCurrent();
        rebuildGrid();
        doneCurrent();
    }
    update();
}

void Viewport::clear() {
    pending_.clear();
    pendingUpload_ = true;
    bounds_ = {0, 0, 0, 0, 0, 0};
    update();
}

void Viewport::rebuildGrid() {
    if (!glReady_) return;
    const bool empty = bounds_[3] <= bounds_[0] && bounds_[4] <= bounds_[1];
    const float cx = empty ? 0 : std::round((bounds_[0] + bounds_[3]) / 20.f) * 10.f;
    const float cy = empty ? 0 : std::round((bounds_[1] + bounds_[4]) / 20.f) * 10.f;
    const float z = empty ? 0 : bounds_[2] - 0.01f;
    const float size = std::max(200.f, std::ceil(std::max(bounds_[3] - bounds_[0], bounds_[4] - bounds_[1]) * 1.6f / 50.f) * 50.f);
    const float step = 10.f;
    const int cells = int(size / step);
    const float half = size / 2;
    std::vector<LineVertex> lines;
    auto add = [&](float x0, float y0, float x1, float y1, int i) {
        const bool centre = i == cells / 2;
        const bool major = i % 5 == 0;
        const uint8_t a = centre ? 255 : major ? 200 : 120;
        const uint8_t r = centre ? 0x3b : 0x26, g = centre ? 0x41 : 0x2a, b = centre ? 0x50 : 0x33;
        lines.push_back({{x0, y0, z}, {r, g, b, a}});
        lines.push_back({{x1, y1, z}, {r, g, b, a}});
    };
    for (int i = 0; i <= cells; i++) {
        const float o = -half + i * step;
        add(cx + o, cy - half, cx + o, cy + half, i);
        add(cx - half, cy + o, cx + half, cy + o, i);
    }
    gridVbo_.bind();
    gridVbo_.allocate(lines.data(), int(lines.size() * sizeof(LineVertex)));
    gridVbo_.release();
    gridVertexCount_ = int(lines.size());
}

QVector3D Viewport::eye() const {
    const float y = qDegreesToRadians(yaw_), p = qDegreesToRadians(pitch_);
    return target_ + distance_ * QVector3D(std::cos(p) * std::cos(y), std::cos(p) * std::sin(y), std::sin(p));
}

QMatrix4x4 Viewport::viewMatrix() const {
    QMatrix4x4 v;
    v.lookAt(eye(), target_, QVector3D(0, 0, 1));
    return v;
}

QMatrix4x4 Viewport::projMatrix() const {
    QMatrix4x4 p;
    const float aspect = height() > 0 ? float(width()) / float(height()) : 1.f;
    const float radius = std::max({bounds_[3] - bounds_[0], bounds_[4] - bounds_[1], bounds_[5] - bounds_[2], 200.f});
    p.perspective(fovY_, aspect, std::max(0.05f, distance_ * 0.01f), distance_ + radius * 4.f);
    return p;
}

void Viewport::fitView() {
    const bool empty = bounds_[3] <= bounds_[0] && bounds_[4] <= bounds_[1] && bounds_[5] <= bounds_[2];
    if (empty) {
        target_ = {0, 0, 0};
        distance_ = 300;
    } else {
        target_ = QVector3D((bounds_[0] + bounds_[3]) / 2, (bounds_[1] + bounds_[4]) / 2, (bounds_[2] + bounds_[5]) / 2);
        const QVector3D ext(bounds_[3] - bounds_[0], bounds_[4] - bounds_[1], bounds_[5] - bounds_[2]);
        const float radius = std::max(ext.length() / 2, 1.f);
        const float aspect = height() > 0 ? std::min(1.f, float(width()) / float(height())) : 1.f;
        const float halfFov = qDegreesToRadians(fovY_ / 2) * aspect;
        distance_ = radius / std::sin(halfFov) * 1.08f;
    }
    update();
}

void Viewport::resetView() {
    yaw_ = -60;
    pitch_ = 25;
    fitView();
}

void Viewport::setViewTop() {
    yaw_ = -90;
    pitch_ = 89.9f;
    fitView();
}

void Viewport::setViewFront() {
    yaw_ = -90;
    pitch_ = 0;
    fitView();
}

void Viewport::paintGL() {
    glClearColor(0.043f, 0.047f, 0.059f, 1.f);
    glClear(GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
    if (!glReady_) return;

    if (pendingUpload_) {
        meshVbo_.bind();
        meshVbo_.allocate(pending_.empty() ? nullptr : pending_.data(), int(pending_.size() * sizeof(MeshVertex)));
        meshVbo_.release();
        vertexCount_ = int(pending_.size());
        pending_.clear();
        pending_.shrink_to_fit();
        pendingUpload_ = false;
        rebuildGrid();
    }

    glDisable(GL_DEPTH_TEST);
    bgProg_->bind();
    bgVao_.bind();
    glDrawArrays(GL_TRIANGLES, 0, 3);
    bgVao_.release();

    const QMatrix4x4 view = viewMatrix();
    const QMatrix4x4 mvp = projMatrix() * view;

    glEnable(GL_DEPTH_TEST);
    glDepthFunc(GL_LEQUAL);
    glDisable(GL_CULL_FACE);

    // plate grid, blended, not writing depth so it never hides the model
    glEnable(GL_BLEND);
    glBlendFunc(GL_SRC_ALPHA, GL_ONE_MINUS_SRC_ALPHA);
    glDepthMask(GL_FALSE);
    lineProg_->bind();
    lineProg_->setUniformValue("uMvp", mvp);
    gridVao_.bind();
    glDrawArrays(GL_LINES, 0, gridVertexCount_);
    gridVao_.release();
    glDepthMask(GL_TRUE);
    glDisable(GL_BLEND);

    if (vertexCount_ > 0) {
        meshProg_->bind();
        meshProg_->setUniformValue("uMvp", mvp);
        meshProg_->setUniformValue("uView", view);
        meshVao_.bind();
        glDrawArrays(GL_TRIANGLES, 0, vertexCount_);
        meshVao_.release();
    }
    drawGizmo();
}

void Viewport::drawGizmo() {
    // Axes in the bottom-left corner, drawn in 2D with the camera rotation.
    const QMatrix4x4 view = viewMatrix();
    QPainter painter(this);
    painter.setRenderHint(QPainter::Antialiasing);
    const QPointF origin(56, height() - 56);
    struct Axis {
        QVector3D dir;
        QColor colour;
        const char *label;
        float depth;
    };
    Axis axes[3] = {{{1, 0, 0}, QColor("#e5484d"), "X", 0}, {{0, 1, 0}, QColor("#46a758"), "Y", 0}, {{0, 0, 1}, QColor("#3e8ef7"), "Z", 0}};
    for (auto &a : axes) a.depth = view.mapVector(a.dir).z();
    std::sort(std::begin(axes), std::end(axes), [](const Axis &a, const Axis &b) { return a.depth < b.depth; });
    QFont f = painter.font();
    f.setPointSizeF(8);
    f.setBold(true);
    painter.setFont(f);
    for (const auto &a : axes) {
        const QVector3D v = view.mapVector(a.dir);
        const QPointF end = origin + QPointF(v.x(), -v.y()) * 36;
        painter.setPen(QPen(a.colour, 2.2, Qt::SolidLine, Qt::RoundCap));
        painter.drawLine(origin, end);
        painter.setPen(Qt::NoPen);
        painter.setBrush(a.colour);
        painter.drawEllipse(end, 7.5, 7.5);
        painter.setPen(QColor("#0b0c0f"));
        painter.drawText(QRectF(end.x() - 7.5, end.y() - 7.5, 15, 15), Qt::AlignCenter, a.label);
    }
    painter.end();
}

void Viewport::mousePressEvent(QMouseEvent *e) {
    lastPos_ = e->position().toPoint();
    dragButton_ = e->button();
    panning_ = e->button() == Qt::RightButton || e->button() == Qt::MiddleButton ||
               (e->button() == Qt::LeftButton && (e->modifiers() & Qt::ShiftModifier));
}

void Viewport::mouseMoveEvent(QMouseEvent *e) {
    if (dragButton_ == Qt::NoButton) return;
    const QPoint pos = e->position().toPoint();
    const QPoint d = pos - lastPos_;
    lastPos_ = pos;
    if (panning_) {
        const QMatrix4x4 inv = viewMatrix().inverted();
        const QVector3D right = inv.mapVector(QVector3D(1, 0, 0));
        const QVector3D up = inv.mapVector(QVector3D(0, 1, 0));
        const float perPixel = 2.f * distance_ * std::tan(qDegreesToRadians(fovY_ / 2)) / std::max(1, height());
        target_ += (-d.x() * right + d.y() * up) * perPixel;
    } else {
        yaw_ -= d.x() * 0.35f;
        pitch_ = std::clamp(pitch_ + d.y() * 0.35f, -89.9f, 89.9f);
    }
    update();
}

void Viewport::mouseReleaseEvent(QMouseEvent *) {
    dragButton_ = Qt::NoButton;
    panning_ = false;
}

void Viewport::wheelEvent(QWheelEvent *e) {
    const float steps = e->angleDelta().y() / 120.f;
    distance_ = std::clamp(distance_ * std::pow(0.88f, steps), 1.f, 20000.f);
    update();
}

void Viewport::mouseDoubleClickEvent(QMouseEvent *) { fitView(); }

} // namespace stlware
