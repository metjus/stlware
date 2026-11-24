#pragma once
// The 3D view: the model with one colour per triangle, the build plate grid and an axes gizmo.
// Left drag orbits, right/middle drag (or Shift + left) pans, the wheel zooms.

#include "Model.h"

#include <QMatrix4x4>
#include <QOpenGLBuffer>
#include <QOpenGLExtraFunctions>
#include <QOpenGLShaderProgram>
#include <QOpenGLVertexArrayObject>
#include <QOpenGLWidget>
#include <QPoint>
#include <QVector3D>

#include <array>
#include <memory>
#include <vector>

namespace stlware {

/** One corner of the drawn mesh: position, face normal, colour. 28 bytes. */
struct MeshVertex {
    float pos[3];
    float normal[3];
    uint8_t colour[4];
};

/** Vertex data for a model (flat shaded: one face normal per triangle). Runs off the UI thread. */
std::vector<MeshVertex> buildMeshVertices(const Model &model);

class Viewport : public QOpenGLWidget, protected QOpenGLExtraFunctions {
    Q_OBJECT
public:
    explicit Viewport(QWidget *parent = nullptr);
    ~Viewport() override;

    /** Show a model; `vertices` is buildMeshVertices(model). */
    void setModel(const Model &model, std::vector<MeshVertex> vertices);
    void clear();
    bool hasModel() const { return vertexCount_ > 0; }

public slots:
    /** Frame the whole model, keeping the view direction. */
    void fitView();
    /** Default view direction (front, slightly from the right and above), then fit. */
    void resetView();
    void setViewTop();
    void setViewFront();

signals:
    void glError(const QString &message);

protected:
    void initializeGL() override;
    void resizeGL(int w, int h) override;
    void paintGL() override;
    void mousePressEvent(QMouseEvent *e) override;
    void mouseMoveEvent(QMouseEvent *e) override;
    void mouseReleaseEvent(QMouseEvent *e) override;
    void wheelEvent(QWheelEvent *e) override;
    void mouseDoubleClickEvent(QMouseEvent *e) override;

private:
    QMatrix4x4 viewMatrix() const;
    QMatrix4x4 projMatrix() const;
    QVector3D eye() const;
    void rebuildGrid();
    void drawGizmo();
    void releaseGL();

    std::unique_ptr<QOpenGLShaderProgram> meshProg_, lineProg_, bgProg_;
    QOpenGLVertexArrayObject meshVao_, gridVao_, bgVao_;
    QOpenGLBuffer meshVbo_{QOpenGLBuffer::VertexBuffer}, gridVbo_{QOpenGLBuffer::VertexBuffer};
    bool glReady_ = false;

    std::vector<MeshVertex> pending_;  // uploaded on the next paint
    bool pendingUpload_ = false;
    int vertexCount_ = 0;
    int gridVertexCount_ = 0;
    std::array<float, 6> bounds_{0, 0, 0, 0, 0, 0};

    // camera (Z up)
    QVector3D target_{0, 0, 0};
    float distance_ = 300.f;
    float yaw_ = -60.f;   // degrees around Z, 0 = looking from +X
    float pitch_ = 25.f;  // degrees above the plate
    float fovY_ = 35.f;

    QPoint lastPos_;
    Qt::MouseButton dragButton_ = Qt::NoButton;
    bool panning_ = false;
};

} // namespace stlware
