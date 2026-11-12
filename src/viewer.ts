/**
 * Three.js viewport: draws the PaintMesh with one flat colour per triangle (looked up from a
 * palette uniform, so changing a colour is instant), raycasts through a BVH, finds the
 * faces under the brush and shows the brush ring and the Fill preview.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import { MeshBVH } from 'three-mesh-bvh';
import type { PaintMesh } from './core/mesh';

export const MAX_COLOURS = 16;

export interface Hit {
  face: number;
  /** Model space (millimetres, Z up). */
  point: THREE.Vector3;
  normal: THREE.Vector3;
}

export class Viewer {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100000);
  readonly controls: OrbitControls;
  private root = new THREE.Group(); // model space (Z up) inside the Y-up scene
  private mesh: THREE.Mesh | null = null;
  private colourAttr: THREE.BufferAttribute | null = null;
  private hiAttr: THREE.BufferAttribute | null = null;
  /** The drawn vertex that carries each face's colour (its provoking vertex). */
  private ownerOf: Uint32Array | null = null;
  /** Index of the drawn mesh with every face (the outliner hides faces by swapping in a shorter one). */
  private fullIndex: THREE.BufferAttribute | null = null;
  /** The provoking vertex is the first of a triangle (WEBGL_provoking_vertex), else the last. */
  private ownerFirst = false;
  /** The view is being moved (drag or damping): big models are drawn with fewer pixels meanwhile. */
  private moving = false;
  /** The little axis cross in the corner: its own scene, drawn over the view after it. */
  private gizmoScene = new THREE.Scene();
  private gizmoCam = new THREE.OrthographicCamera(-1.55, 1.55, 1.55, -1.55, 0.1, 10);
  private gizmo = new THREE.Group();
  private highlighted: ArrayLike<number> | null = null;
  private bvh: MeshBVH | null = null;
  private paintMesh: PaintMesh | null = null;
  /** 1 per hidden face (outliner), or null when everything is shown. */
  private hidden: Uint8Array | null = null;
  /** Resolution lowered after slow frames (big model on a weak GPU); 0 = not lowered. */
  private ratioCap = 0;
  private slowFrames = 0;
  private lastFrame = 0;
  /** The whole colour buffer goes to the GPU with the next frame (partial ranges would cut it short). */
  private fullColourUpload = false;
  private grid: THREE.GridHelper | null = null;
  private ring: THREE.Mesh;
  private dirty = true;
  private palette = Array.from({ length: MAX_COLOURS }, () => new THREE.Color(0xcccccc));
  private uniforms = {
    uPalette: { value: this.palette },
    uHiColor: { value: new THREE.Color(0xffffff) },
    uHiStrength: { value: 0.5 },
  };
  private material: THREE.MeshStandardMaterial;
  /** Model bounds centre (mirror planes for symmetry). */
  centre = new THREE.Vector3();
  size = new THREE.Vector3();

  constructor(private container: HTMLElement) {
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(this.pixelRatio());
    this.renderer.setClearColor(0x000000, 0);
    // one vertex per face carries the face's colour; drivers prefer it first (no index rewriting)
    const pv = this.renderer.getContext().getExtension('WEBGL_provoking_vertex') as { provokingVertexWEBGL(mode: number): void; FIRST_VERTEX_CONVENTION_WEBGL: number } | null;
    if (pv) {
      pv.provokingVertexWEBGL(pv.FIRST_VERTEX_CONVENTION_WEBGL);
      this.ownerFirst = true;
    }
    container.appendChild(this.renderer.domElement);
    this.renderer.domElement.style.display = 'block';
    this.renderer.domElement.style.touchAction = 'none';

    this.root.rotation.x = -Math.PI / 2;
    this.scene.add(this.root);

    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x3a3f4a, 1.6));
    const key = new THREE.DirectionalLight(0xffffff, 1.6);
    key.position.set(0.6, 1, 0.9);
    this.camera.add(key);
    const fill = new THREE.DirectionalLight(0xffffff, 0.5);
    fill.position.set(-1, -0.3, 0.4);
    this.camera.add(fill);
    this.scene.add(this.camera);

    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.15;
    this.controls.addEventListener('change', () => this.invalidate());

    this.material = new THREE.MeshStandardMaterial({ roughness: 0.72, metalness: 0.0, side: THREE.DoubleSide });
    this.material.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, this.uniforms);
      shader.vertexShader =
        'attribute float aColor;\nattribute float aHi;\nflat varying float vColor;\nflat varying float vHi;\n' +
        shader.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvColor = aColor;\nvHi = aHi;');
      shader.fragmentShader =
        `uniform vec3 uPalette[${MAX_COLOURS}];\nuniform vec3 uHiColor;\nuniform float uHiStrength;\nflat varying float vColor;\nflat varying float vHi;\n` +
        shader.fragmentShader.replace(
          'vec4 diffuseColor = vec4( diffuse, opacity );',
          `vec3 base = uPalette[int(vColor + 0.5)];
          base = mix(base, uHiColor, step(0.5, vHi) * uHiStrength);
          vec4 diffuseColor = vec4( base, opacity );`,
        );
    };

    const ringGeo = new THREE.RingGeometry(0.93, 1, 64);
    this.ring = new THREE.Mesh(
      ringGeo,
      new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.9, depthTest: false, side: THREE.DoubleSide }),
    );
    this.ring.renderOrder = 10;
    this.ring.visible = false;
    this.root.add(this.ring);

    this.buildGizmo();

    new ResizeObserver(() => this.resize()).observe(container);
    this.resize();
    const loop = (now: number) => {
      requestAnimationFrame(loop);
      this.controls.update();
      this.watchMotion();
      if (this.dirty) {
        this.dirty = false;
        this.renderer.render(this.scene, this.camera);
        this.drawGizmo();
        this.fullColourUpload = false;
        this.watchFrameTime(now);
      } else this.lastFrame = 0;
    };
    requestAnimationFrame(loop);
  }

  invalidate() {
    this.dirty = true;
  }

  private pixelRatio() {
    const faces = this.paintMesh?.faceCount ?? 0;
    const max = faces > 1_500_000 ? 1 : faces > 250_000 ? 1.5 : 2;
    let r = Math.min(window.devicePixelRatio || 1, max);
    if (this.ratioCap) r = Math.min(r, this.ratioCap);
    // while the view turns, a big model is drawn with fewer pixels; the still frame gets them all
    if (this.moving && faces > 250_000) r = Math.min(r, faces > 1_500_000 ? 0.75 : 1);
    return r;
  }

  private lastPos = new THREE.Vector3();
  private lastQuat = new THREE.Quaternion();
  private quiet = 0;

  /** Is the view turning? Sub-pixel damping at the end of a drag does not count, so the sharp frame comes right away. */
  private watchMotion() {
    const cam = this.camera;
    const dist = cam.position.distanceTo(this.controls.target);
    const moved = cam.position.distanceToSquared(this.lastPos) > (dist * 1e-3) ** 2 || 8 * (1 - Math.abs(cam.quaternion.dot(this.lastQuat))) > 1e-5;
    this.lastPos.copy(cam.position);
    this.lastQuat.copy(cam.quaternion);
    if (moved) {
      this.quiet = 0;
      if (!this.moving) this.setMoving(true);
    } else if (this.moving && ++this.quiet >= 6) this.setMoving(false);
  }

  private setMoving(moving: boolean) {
    this.moving = moving;
    const r = this.pixelRatio();
    if (r === this.renderer.getPixelRatio()) return;
    this.renderer.setPixelRatio(r);
    this.resize();
  }

  /**
   * While the view keeps moving, frames come back to back. If they keep taking much longer
   * than 1/30 s, the GPU cannot keep up: draw with fewer pixels (once, not on every drag,
   * since changing the canvas size itself stalls).
   */
  private watchFrameTime(now: number) {
    const dt = this.lastFrame ? now - this.lastFrame : 0;
    this.lastFrame = now;
    if (!dt || dt > 250) return;
    this.slowFrames = dt > 34 ? this.slowFrames + 1 : Math.max(0, this.slowFrames - 2);
    const r = this.renderer.getPixelRatio();
    if (this.slowFrames >= 20 && r > 1) {
      this.slowFrames = 0;
      this.ratioCap = Math.max(1, r - 0.5);
      this.renderer.setPixelRatio(this.pixelRatio());
      this.resize();
    }
  }

  private resize() {
    const w = this.container.clientWidth || 1;
    const h = this.container.clientHeight || 1;
    this.renderer.setSize(w, h, false);
    this.renderer.domElement.style.width = '100%';
    this.renderer.domElement.style.height = '100%';
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
    this.invalidate();
  }

  setPalette(hexes: string[]) {
    hexes.slice(0, MAX_COLOURS).forEach((h, i) => this.palette[i].set(h));
    this.invalidate();
  }

  /** Show a new model. */
  setMesh(pm: PaintMesh, keepView = false) {
    if (this.mesh) {
      this.root.remove(this.mesh);
      this.mesh.geometry.dispose();
    }
    this.paintMesh = pm;
    const layout = renderLayout(pm, this.ownerFirst);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(layout.positions, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(layout.normals, 3, true));
    const slots = layout.positions.length / 3;
    this.colourAttr = new THREE.BufferAttribute(new Uint8Array(slots), 1);
    this.hiAttr = new THREE.BufferAttribute(new Uint8Array(slots), 1);
    geo.setAttribute('aColor', this.colourAttr);
    geo.setAttribute('aHi', this.hiAttr);
    this.fullIndex = new THREE.BufferAttribute(layout.index, 1);
    geo.setIndex(this.fullIndex);
    this.ownerOf = layout.owner;
    geo.computeBoundingSphere();
    this.mesh = new THREE.Mesh(geo, this.material);
    this.root.add(this.mesh);
    this.highlighted = null;
    this.hidden = null;
    this.ratioCap = 0;
    this.slowFrames = 0;
    this.refreshAllColours();
    this.renderer.setPixelRatio(this.pixelRatio());
    this.resize();

    // BVH over the welded mesh; "indirect" keeps triangle numbers unchanged.
    const bvhGeo = new THREE.BufferGeometry();
    bvhGeo.setAttribute('position', new THREE.BufferAttribute(pm.positions, 3));
    bvhGeo.setIndex(new THREE.BufferAttribute(pm.index, 1));
    this.bvh = new MeshBVH(bvhGeo, { indirect: true, maxDepth: 40 });

    const b = pm.bounds();
    this.centre.set((b[0] + b[3]) / 2, (b[1] + b[4]) / 2, (b[2] + b[5]) / 2);
    this.size.set(b[3] - b[0], b[4] - b[1], b[5] - b[2]);
    // stand the model on the bed, centred
    this.root.position.set(-this.centre.x, -b[2], this.centre.y);
    this.root.updateMatrixWorld(true);
    this.buildGrid();
    if (!keepView) this.frame();
  }

  /**
   * The axis cross shown in the corner: the model's X, Y and Z (the mirror planes of
   * symmetry), each a short arm with its letter, turning with the view.
   */
  private buildGizmo() {
    this.gizmo.rotation.x = -Math.PI / 2; // model space (Z up) like the scene's model group
    this.gizmoScene.add(this.gizmo);
    AXES.forEach((ax, i) => {
      const dir = new THREE.Vector3();
      dir.setComponent(i, 1);
      const arm = new THREE.Mesh(
        new THREE.CylinderGeometry(0.055, 0.055, 1, 10).translate(0, 0.5, 0).rotateX(Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: ax.colour }),
      );
      arm.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
      this.gizmo.add(arm);
      // a faint stub the other way, so the mirror plane of that axis reads as a whole line
      const back = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03, 0.03, 0.45, 8).translate(0, -0.225, 0).rotateX(Math.PI / 2),
        new THREE.MeshBasicMaterial({ color: ax.colour, transparent: true, opacity: 0.3 }),
      );
      back.quaternion.copy(arm.quaternion);
      this.gizmo.add(back);
      const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: textTexture(ax.name, ax.colour), depthTest: false, transparent: true }));
      label.position.copy(dir).multiplyScalar(1.24);
      label.scale.setScalar(0.66);
      label.renderOrder = 2;
      this.gizmo.add(label);
    });
    this.gizmo.add(new THREE.Mesh(new THREE.SphereGeometry(0.09, 12, 8), new THREE.MeshBasicMaterial({ color: 0xe8eaf0 })));
    this.gizmoCam.position.set(0, 0, 4);
  }

  /** How big the corner cross is drawn, in CSS pixels. */
  private gizmoSize() {
    const w = this.container.clientWidth, h = this.container.clientHeight;
    return Math.round(Math.min(78, Math.max(48, Math.min(w, h) * 0.1)));
  }

  /** Draw the axis cross into the bottom-left corner, turned the way the view is. */
  private drawGizmo() {
    if (!this.mesh) return; // nothing loaded yet
    const size = this.gizmoSize();
    const pad = 10;
    const h = this.container.clientHeight;
    if (this.container.clientWidth < size + 2 * pad || h < size + 2 * pad) return;
    this.gizmoCam.quaternion.copy(this.camera.quaternion);
    this.gizmoCam.position.set(0, 0, 4).applyQuaternion(this.camera.quaternion);
    const r = this.renderer;
    r.autoClear = false; // the view is already drawn; only the depth in the corner is cleared
    r.setScissorTest(true);
    r.setViewport(pad, pad, size, size); // the renderer counts from the bottom edge
    r.setScissor(pad, pad, size, size);
    r.clearDepth();
    r.render(this.gizmoScene, this.gizmoCam);
    r.autoClear = true;
    r.setScissorTest(false);
    r.setViewport(0, 0, this.container.clientWidth, h);
  }

  private buildGrid() {
    if (this.grid) {
      this.scene.remove(this.grid);
      this.grid.geometry.dispose();
    }
    const extent = Math.max(this.size.x, this.size.y) * 1.6;
    const step = extent > 400 ? 50 : extent > 120 ? 10 : extent > 30 ? 5 : 1;
    const cells = Math.max(4, Math.ceil(extent / step / 2) * 2);
    this.grid = new THREE.GridHelper(cells * step, cells, 0x3b4150, 0x262a33);
    this.scene.add(this.grid);
  }

  /** Frame the whole model. */
  frame() {
    const radius = Math.max(this.size.length() / 2, 1);
    const target = new THREE.Vector3(0, this.size.z / 2, 0);
    const dist = radius / Math.sin(THREE.MathUtils.degToRad(this.camera.fov / 2)) * 1.05;
    this.controls.target.copy(target);
    this.camera.position.set(0, target.y + radius * 0.15, dist);
    this.camera.near = Math.max(dist / 1000, 0.01);
    this.camera.far = dist * 100;
    this.camera.updateProjectionMatrix();
    this.controls.update();
    this.invalidate();
  }

  refreshAllColours() {
    if (!this.paintMesh || !this.colourAttr || !this.ownerOf) return;
    const fc = this.paintMesh.faceColor;
    const arr = this.colourAttr.array as Uint8Array;
    const owner = this.ownerOf;
    for (let f = 0; f < fc.length; f++) arr[owner[f]] = fc[f];
    this.colourAttr.clearUpdateRanges(); // whole buffer
    this.fullColourUpload = true;
    this.colourAttr.needsUpdate = true;
    this.invalidate();
  }

  updateFaces(faces: Iterable<number>) {
    if (!this.paintMesh || !this.colourAttr || !this.ownerOf) return;
    const fc = this.paintMesh.faceColor;
    const arr = this.colourAttr.array as Uint8Array;
    const owner = this.ownerOf;
    let lo = Infinity, hi = -1;
    for (const f of faces) {
      const v = owner[f];
      arr[v] = fc[f];
      if (v < lo) lo = v;
      if (v > hi) hi = v;
    }
    if (hi < 0) return;
    // big models: send only the changed span to the GPU, not the whole buffer
    if (!this.fullColourUpload) this.colourAttr.addUpdateRange(lo, hi - lo + 1);
    this.colourAttr.needsUpdate = true;
    this.invalidate();
  }

  /** Tint faces (Fill preview), or clear with null. */
  setHighlight(faces: ArrayLike<number> | null, hex?: string) {
    if (!this.hiAttr || !this.ownerOf) return;
    if (faces === this.highlighted) return;
    const arr = this.hiAttr.array as Uint8Array;
    const owner = this.ownerOf;
    if (this.highlighted) {
      const old = this.highlighted;
      for (let i = 0; i < old.length; i++) arr[owner[old[i]]] = 0;
    }
    if (faces) {
      for (let i = 0; i < faces.length; i++) arr[owner[faces[i]]] = 1;
      if (hex) this.uniforms.uHiColor.value.set(hex);
    }
    this.highlighted = faces;
    this.hiAttr.needsUpdate = true;
    this.invalidate();
  }

  /** Hide faces (1 = hidden) or show everything with null. Hidden faces are not drawn or picked. */
  setHidden(hidden: Uint8Array | null) {
    if (!this.mesh || !this.paintMesh) return;
    this.hidden = hidden && hidden.some((h) => h) ? hidden : null;
    const geo = this.mesh.geometry;
    if (!this.hidden) geo.setIndex(this.fullIndex);
    else {
      const all = this.fullIndex!.array as Uint32Array;
      let n = 0;
      for (let f = 0; f < this.hidden.length; f++) if (!this.hidden[f]) n++;
      const idx = new Uint32Array(n * 3);
      let k = 0;
      for (let f = 0; f < this.hidden.length; f++) {
        if (this.hidden[f]) continue;
        idx[k++] = all[3 * f];
        idx[k++] = all[3 * f + 1];
        idx[k++] = all[3 * f + 2];
      }
      geo.setIndex(new THREE.BufferAttribute(idx, 1));
    }
    this.invalidate();
  }

  isHidden(f: number) {
    return !!this.hidden && this.hidden[f] === 1;
  }

  /** First model face under a screen point. */
  raycast(clientX: number, clientY: number): Hit | null {
    if (!this.bvh || !this.mesh || !this.paintMesh) return null;
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, this.camera);
    const local = ray.ray.clone().applyMatrix4(this.root.matrixWorld.clone().invert());
    let hit: THREE.Intersection | null;
    if (!this.hidden) hit = this.bvh.raycastFirst(local, THREE.DoubleSide);
    else {
      const hidden = this.hidden;
      hit = this.bvh.raycast(local, THREE.DoubleSide)
        .filter((h) => h.faceIndex != null && !hidden[h.faceIndex])
        .sort((a, b) => a.distance - b.distance)[0] ?? null;
    }
    if (!hit || hit.faceIndex == null) return null;
    const n = this.paintMesh.normals();
    const f = hit.faceIndex;
    const normal = new THREE.Vector3(n[3 * f], n[3 * f + 1], n[3 * f + 2]);
    if (normal.dot(local.direction) > 0) normal.negate();
    return { face: f, point: hit.point.clone(), normal };
  }

  /** The ray under a screen point, in model space. */
  modelRay(clientX: number, clientY: number): THREE.Ray {
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, this.camera);
    return ray.ray.clone().applyMatrix4(this.root.matrixWorld.clone().invert());
  }

  private ghost = new THREE.Group();

  /** A single see-through shape under the cursor (connector placement), or nothing with null. */
  setGhost(item: { positions: Float32Array; index: Uint32Array; hex: string } | null) {
    this.clearGroup(this.ghost);
    if (!this.ghost.parent) this.root.add(this.ghost);
    if (item) {
      const geo = expand(item.positions, item.index);
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: item.hex, transparent: true, opacity: 0.6, depthTest: false, depthWrite: false, side: THREE.DoubleSide }));
      m.renderOrder = 7;
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 30), new THREE.LineBasicMaterial({ color: 0xffffff, depthTest: false }));
      edges.renderOrder = 8;
      this.ghost.add(m, edges);
    }
    this.invalidate();
  }

  /**
   * Faces within `radius` of a point that face the same way (the brush footprint). With `seed`
   * (the face under the brush) "the same way" is judged by that face's own normal, so models
   * whose triangles are wound inside out (normals pointing in) paint just the same.
   */
  facesInSphere(point: THREE.Vector3, normal: THREE.Vector3, radius: number, out: Set<number>, seed?: number) {
    if (!this.bvh || !this.paintMesh) return;
    const n = this.paintMesh.normals();
    if (seed !== undefined) normal = new THREE.Vector3(n[3 * seed], n[3 * seed + 1], n[3 * seed + 2]);
    const sphere = new THREE.Sphere(point, radius);
    const r2 = radius * radius;
    const tmp = new THREE.Vector3();
    this.bvh.shapecast({
      intersectsBounds: (box) => box.intersectsSphere(sphere),
      intersectsTriangle: (tri, f) => {
        if (this.hidden && this.hidden[f]) return false;
        if (n[3 * f] * normal.x + n[3 * f + 1] * normal.y + n[3 * f + 2] * normal.z <= 0) return false;
        tri.closestPointToPoint(point, tmp);
        if (tmp.distanceToSquared(point) <= r2) out.add(f);
        return false;
      },
    });
  }

  /** The face nearest to a model-space point (symmetry). */
  nearestFace(point: THREE.Vector3): Hit | null {
    if (!this.bvh || !this.paintMesh) return null;
    const res = this.bvh.closestPointToPoint(point, { point: new THREE.Vector3(), distance: 0, faceIndex: 0 });
    if (!res || res.faceIndex == null) return null;
    const n = this.paintMesh.normals();
    const f = res.faceIndex;
    if (this.hidden && this.hidden[f]) return null;
    return { face: f, point: res.point.clone(), normal: new THREE.Vector3(n[3 * f], n[3 * f + 1], n[3 * f + 2]) };
  }

  showRing(hit: Hit | null, radius: number, hex = '#ffffff') {
    if (!hit) {
      if (this.ring.visible) {
        this.ring.visible = false;
        this.invalidate();
      }
      return;
    }
    this.ring.visible = true;
    this.ring.position.copy(hit.point).addScaledVector(hit.normal, radius * 0.02);
    this.ring.scale.setScalar(radius);
    this.ring.lookAt(this.root.localToWorld(hit.point.clone().add(hit.normal)));
    (this.ring.material as THREE.MeshBasicMaterial).color.set(hex);
    this.invalidate();
  }

  /** Screen size in pixels of a model-space length at a point (brush spacing). */
  pixelsPerMm(point: THREE.Vector3): number {
    const world = this.root.localToWorld(point.clone());
    const dist = world.distanceTo(this.camera.position);
    const h = this.renderer.domElement.clientHeight;
    return h / (2 * dist * Math.tan(THREE.MathUtils.degToRad(this.camera.fov / 2)));
  }

  // -------------------------------------------------------------------------
  // Split preview and result
  // -------------------------------------------------------------------------

  private overlay = new THREE.Group();
  private result = new THREE.Group();
  private resultItems: { obj: THREE.Mesh; offset: THREE.Vector3 }[] = [];

  /** See-through parts drawn over the model (split preview); red triangles where `bad`. */
  setOverlay(items: { positions: Float32Array; index: Uint32Array; hex: string; bad?: Set<number> }[] | null) {
    this.clearGroup(this.overlay);
    if (!this.overlay.parent) this.root.add(this.overlay);
    for (const it of items ?? []) {
      const geo = expand(it.positions, it.index);
      const n = it.index.length / 3;
      const col = new Float32Array(n * 9);
      const base = new THREE.Color(it.hex), red = new THREE.Color(1, 0.08, 0.05);
      for (let f = 0; f < n; f++) {
        const bad = it.bad && it.bad.size && [0, 1, 2].some((c) => it.bad!.has(it.index[3 * f + c]));
        const c = bad ? red : base;
        for (let k = 0; k < 3; k++) col.set([c.r, c.g, c.b], 9 * f + 3 * k);
      }
      geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
      const mat = new THREE.MeshBasicMaterial({ vertexColors: true, transparent: true, opacity: 0.45, depthTest: false, depthWrite: false, side: THREE.DoubleSide });
      const m = new THREE.Mesh(geo, mat);
      m.renderOrder = 5;
      this.overlay.add(m);
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 30), new THREE.LineBasicMaterial({ color: base, transparent: true, opacity: 0.8, depthTest: false }));
      edges.renderOrder = 6;
      this.overlay.add(edges);
    }
    this.invalidate();
  }

  /** Show the split result (body and parts) instead of the paintable model, or go back with null. */
  setResult(items: { positions: Float32Array; index: Uint32Array; colours: string[]; faceColor?: Uint8Array }[] | null) {
    this.clearGroup(this.result);
    this.resultItems = [];
    if (!this.result.parent) this.root.add(this.result);
    if (this.mesh) this.mesh.visible = !items;
    if (!items) {
      this.invalidate();
      return;
    }
    const bodyCentre = this.centre.clone();
    for (const it of items) {
      const geo = expand(it.positions, it.index);
      const n = it.index.length / 3;
      const col = new Float32Array(n * 9);
      const cols = it.colours.map((h) => new THREE.Color(h));
      for (let f = 0; f < n; f++) {
        const c = cols[it.faceColor ? it.faceColor[f] : 0] ?? cols[0];
        for (let k = 0; k < 3; k++) col.set([c.r, c.g, c.b], 9 * f + 3 * k);
      }
      geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
      geo.computeVertexNormals();
      geo.computeBoundingBox();
      const obj = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.72, side: THREE.DoubleSide }));
      const c = geo.boundingBox!.getCenter(new THREE.Vector3());
      const offset = c.sub(bodyCentre);
      if (offset.lengthSq() < 1e-9) offset.set(0, 0, 1);
      offset.normalize();
      this.result.add(obj);
      this.resultItems.push({ obj, offset });
    }
    this.invalidate();
  }

  /** Move parts apart (mm), and show or hide each result object. */
  layoutResult(explode: number, visible: boolean[]) {
    this.resultItems.forEach((it, i) => {
      it.obj.position.copy(it.offset).multiplyScalar(i === 0 ? 0 : explode);
      it.obj.visible = visible[i] !== false;
    });
    this.invalidate();
  }

  private clearGroup(g: THREE.Group) {
    for (const c of [...g.children]) {
      g.remove(c);
      const m = c as THREE.Mesh;
      m.geometry?.dispose();
      const mat = m.material as THREE.Material & { map?: THREE.Texture | null };
      mat?.map?.dispose();
      mat?.dispose?.();
    }
  }

  // --- cut plane ---------------------------------------------------------------

  /** The cut plane in model space (its local Z is the plane's normal), with its handles. */
  private cutObj: THREE.Group | null = null;
  private cutCtl: TransformControls | null = null;
  private cutSections = new THREE.Group();
  /** Called while the plane is dragged (done = the drag ended). */
  onCutMove: ((normal: THREE.Vector3, point: THREE.Vector3, done: boolean) => void) | null = null;
  /** A handle of the plane is being dragged (a click then isn't a click). */
  cutDragging = false;
  /** The pointer is over a handle of the plane. */
  get cutHover() {
    return !!this.cutCtl && this.cutCtl.enabled && this.cutCtl.axis !== null;
  }

  /** Show the cut plane through `point` (model space), or hide it with null. */
  setCutPlane(plane: { normal: THREE.Vector3; point: THREE.Vector3; size: number } | null, mode: 'translate' | 'rotate' = 'translate') {
    if (!plane) {
      if (this.cutObj) {
        this.cutCtl!.detach();
        this.cutCtl!.enabled = false;
        this.cutCtl!.getHelper().visible = false;
        this.cutObj.visible = false;
      }
      this.clearGroup(this.cutSections);
      this.invalidate();
      return;
    }
    if (!this.cutObj) {
      this.cutObj = new THREE.Group();
      this.root.add(this.cutObj);
      this.root.add(this.cutSections);
      const ctl = new TransformControls(this.camera, this.renderer.domElement);
      ctl.setSpace('local');
      ctl.setSize(0.9);
      ctl.showXYZE = false;
      ctl.addEventListener('change', () => this.invalidate());
      ctl.addEventListener('dragging-changed', (e) => {
        const dragging = !!(e as unknown as { value: boolean }).value;
        this.cutDragging = dragging;
        this.controls.enabled = !dragging;
        if (!dragging) this.emitCut(true);
      });
      ctl.addEventListener('objectChange', () => this.emitCut(false));
      this.scene.add(ctl.getHelper());
      this.cutCtl = ctl;
    }
    const obj = this.cutObj;
    const size = plane.size;
    if (obj.userData.size !== size) {
      this.clearGroup(obj);
      obj.userData.size = size;
      const sq = new THREE.Mesh(
        new THREE.PlaneGeometry(size, size),
        new THREE.MeshBasicMaterial({ color: 0x9cc3ff, transparent: true, opacity: 0.13, depthWrite: false, side: THREE.DoubleSide }),
      );
      sq.renderOrder = 4;
      const h = size / 2;
      const border = new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(-h, -h, 0), new THREE.Vector3(h, -h, 0), new THREE.Vector3(h, h, 0), new THREE.Vector3(-h, h, 0)]),
        new THREE.LineBasicMaterial({ color: 0xc4dbff, transparent: true, opacity: 0.55, depthWrite: false }),
      );
      obj.add(sq, border);
    }
    obj.visible = true;
    obj.position.copy(plane.point);
    obj.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), plane.normal.clone().normalize());
    const ctl = this.cutCtl!;
    if (ctl.object !== obj) ctl.attach(obj);
    ctl.enabled = true;
    ctl.getHelper().visible = true;
    ctl.setMode(mode);
    // moving: only along the normal; turning: only tilting (spinning in the plane does nothing)
    ctl.showX = mode === 'rotate';
    ctl.showY = mode === 'rotate';
    ctl.showZ = mode === 'translate';
    this.invalidate();
  }

  private emitCut(done: boolean) {
    if (!this.cutObj || !this.onCutMove) return;
    const n = new THREE.Vector3(0, 0, 1).applyQuaternion(this.cutObj.quaternion).normalize();
    this.onCutMove(n, this.cutObj.position.clone(), done);
  }

  /**
   * Draw the sections of the cut (model space): filled where the cut goes through, faint where
   * it doesn't, each with its number.
   */
  setCutSections(items: { positions: Float32Array; index: Uint32Array; loops: Float32Array[]; label: THREE.Vector3; on: boolean; hover: boolean }[]) {
    this.clearGroup(this.cutSections);
    items.forEach((it, i) => {
      const colour = it.on ? 0xffb020 : 0x9aa3b2;
      const fillGeo = new THREE.BufferGeometry();
      fillGeo.setAttribute('position', new THREE.BufferAttribute(it.positions, 3));
      fillGeo.setIndex(new THREE.BufferAttribute(it.index, 1));
      const fill = new THREE.Mesh(
        fillGeo,
        new THREE.MeshBasicMaterial({ color: colour, transparent: true, opacity: (it.on ? 0.5 : 0.14) + (it.hover ? 0.2 : 0), depthTest: false, depthWrite: false, side: THREE.DoubleSide }),
      );
      fill.renderOrder = 6;
      this.cutSections.add(fill);
      for (const loop of it.loops) {
        const g = new THREE.BufferGeometry();
        g.setAttribute('position', new THREE.BufferAttribute(loop, 3));
        const line = new THREE.LineLoop(g, new THREE.LineBasicMaterial({ color: it.hover ? 0xffffff : colour, transparent: true, opacity: it.on || it.hover ? 1 : 0.6, depthTest: false }));
        line.renderOrder = 7;
        this.cutSections.add(line);
      }
      if (items.length > 1) {
        const label = new THREE.Sprite(new THREE.SpriteMaterial({ map: textTexture(String(i + 1), it.on ? '#ffd27a' : '#c8ceda'), depthTest: false, transparent: true, sizeAttenuation: false }));
        label.position.copy(it.label);
        label.scale.setScalar(0.032);
        label.renderOrder = 8;
        this.cutSections.add(label);
      }
    });
    this.invalidate();
  }

  /** Where a screen point's ray meets a plane (model space), or null. */
  rayPlane(clientX: number, clientY: number, normal: THREE.Vector3, d: number): THREE.Vector3 | null {
    const ray = this.modelRay(clientX, clientY);
    return ray.intersectPlane(new THREE.Plane(normal.clone(), -d), new THREE.Vector3());
  }

  /** The direction the camera looks, in model space. */
  viewDirection(): THREE.Vector3 {
    const dir = new THREE.Vector3();
    this.camera.getWorldDirection(dir);
    const inv = new THREE.Quaternion();
    this.root.getWorldQuaternion(inv).invert();
    return dir.applyQuaternion(inv).normalize();
  }

  /** PNG snapshot of the view. */
  snapshot(): string {
    this.renderer.render(this.scene, this.camera);
    return this.renderer.domElement.toDataURL('image/png');
  }
}

/** Non-indexed geometry (flat faces) from positions + index. */
function expand(positions: Float32Array, index: Uint32Array): THREE.BufferGeometry {
  const n = index.length / 3;
  const pos = new Float32Array(n * 9);
  for (let i = 0; i < index.length; i++) {
    const v = index[i] * 3;
    pos[3 * i] = positions[v];
    pos[3 * i + 1] = positions[v + 1];
    pos[3 * i + 2] = positions[v + 2];
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  return geo;
}

const AXES = [
  { name: 'X', colour: '#f87171' },
  { name: 'Y', colour: '#4ade80' },
  { name: 'Z', colour: '#60a5fa' },
];

/** A square texture with one letter on it (axis labels). */
function textTexture(text: string, colour: string): THREE.Texture {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d')!;
  g.font = 'bold 44px system-ui, sans-serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.lineWidth = 6;
  g.strokeStyle = 'rgba(0,0,0,.6)';
  g.strokeText(text, 32, 34);
  g.fillStyle = colour;
  g.fillText(text, 32, 34);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

/**
 * Vertices for drawing the model. Corners are shared where the shading is smooth and split at
 * creases, and every face owns one of its vertices, the provoking vertex, which carries the
 * face's colour (a flat varying). That is about a third of the vertices a plain triangle
 * soup has, so big models turn faster.
 */
export function renderLayout(pm: PaintMesh, ownerFirst: boolean) {
  const n = pm.faceCount;
  const corner = pm.cornerNormals();
  const { index: ix, positions: p } = pm;
  const corners = 3 * n;
  // slot per (vertex, quantised normal), found through a hash table
  let size = 1;
  while (size < corners * 2) size <<= 1;
  const mask = size - 1;
  const table = new Int32Array(size).fill(-1);
  const cap = corners + n; // every corner its own slot, plus a duplicate per face at worst
  const slotVertex = new Int32Array(cap);
  const slotNormal = new Int32Array(corners);
  const normals = new Int8Array(cap * 3);
  const slotOf = new Uint32Array(corners);
  let slots = 0;
  for (let c = 0; c < corners; c++) {
    const v = ix[c];
    const qx = Math.round(corner[3 * c] * 127), qy = Math.round(corner[3 * c + 1] * 127), qz = Math.round(corner[3 * c + 2] * 127);
    const packed = ((qx & 0xff) << 16) | ((qy & 0xff) << 8) | (qz & 0xff);
    let slot = (Math.imul(v, 0x9e3779b1) ^ Math.imul(packed + 1, 0x85ebca6b)) & mask;
    for (;;) {
      const j = table[slot];
      if (j < 0) {
        table[slot] = slots;
        slotVertex[slots] = v;
        slotNormal[slots] = packed;
        normals[3 * slots] = qx;
        normals[3 * slots + 1] = qy;
        normals[3 * slots + 2] = qz;
        slotOf[c] = slots++;
        break;
      }
      if (slotVertex[j] === v && slotNormal[j] === packed) {
        slotOf[c] = j;
        break;
      }
      slot = (slot + 1) & mask;
    }
  }
  // every face gets a slot of its own as provoking vertex; a slot already taken is duplicated
  const owned = new Uint8Array(cap);
  const owner = new Uint32Array(n);
  const index = new Uint32Array(corners);
  for (let f = 0; f < n; f++) {
    const s0 = slotOf[3 * f], s1 = slotOf[3 * f + 1], s2 = slotOf[3 * f + 2];
    let k = !owned[s0] ? 0 : !owned[s1] ? 1 : !owned[s2] ? 2 : -1;
    let own: number;
    if (k < 0) {
      k = 0;
      own = slots++;
      slotVertex[own] = slotVertex[s0];
      normals[3 * own] = normals[3 * s0];
      normals[3 * own + 1] = normals[3 * s0 + 1];
      normals[3 * own + 2] = normals[3 * s0 + 2];
    } else own = k === 0 ? s0 : k === 1 ? s1 : s2;
    owned[own] = 1;
    owner[f] = own;
    // rotate the corners (winding kept) so the owner sits first or last
    const next = k === 0 ? s1 : k === 1 ? s2 : s0;
    const after = k === 0 ? s2 : k === 1 ? s0 : s1;
    if (ownerFirst) {
      index[3 * f] = own;
      index[3 * f + 1] = next;
      index[3 * f + 2] = after;
    } else {
      index[3 * f] = next;
      index[3 * f + 1] = after;
      index[3 * f + 2] = own;
    }
  }
  const positions = new Float32Array(slots * 3);
  for (let s = 0; s < slots; s++) {
    const v = slotVertex[s] * 3;
    positions[3 * s] = p[v];
    positions[3 * s + 1] = p[v + 1];
    positions[3 * s + 2] = p[v + 2];
  }
  return { positions, normals: normals.slice(0, slots * 3), index, owner };
}
