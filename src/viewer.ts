/**
 * Three.js viewport: draws the PaintMesh with one flat colour per triangle (looked up from a
 * palette uniform, so changing a colour is instant), raycasts through a BVH, finds the
 * faces under the brush and shows the brush ring and the Fill preview.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
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
  private highlighted: ArrayLike<number> | null = null;
  private bvh: MeshBVH | null = null;
  private paintMesh: PaintMesh | null = null;
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
    this.renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.setClearColor(0x15171c, 1);
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
        'attribute float aColor;\nattribute float aHi;\nvarying float vColor;\nvarying float vHi;\n' +
        shader.vertexShader.replace('#include <begin_vertex>', '#include <begin_vertex>\nvColor = aColor;\nvHi = aHi;');
      shader.fragmentShader =
        `uniform vec3 uPalette[${MAX_COLOURS}];\nuniform vec3 uHiColor;\nuniform float uHiStrength;\nvarying float vColor;\nvarying float vHi;\n` +
        shader.fragmentShader.replace(
          'vec4 diffuseColor = vec4( diffuse, opacity );',
          `int ci = int(vColor + 0.5);
          vec3 base = uPalette[0];
          for (int k = 1; k < ${MAX_COLOURS}; k++) { if (k == ci) base = uPalette[k]; }
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

    new ResizeObserver(() => this.resize()).observe(container);
    this.resize();
    const loop = () => {
      requestAnimationFrame(loop);
      this.controls.update();
      if (this.dirty) {
        this.dirty = false;
        this.renderer.render(this.scene, this.camera);
      }
    };
    loop();
  }

  invalidate() {
    this.dirty = true;
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
  setMesh(pm: PaintMesh) {
    if (this.mesh) {
      this.root.remove(this.mesh);
      this.mesh.geometry.dispose();
    }
    this.paintMesh = pm;
    const n = pm.faceCount;
    const pos = new Float32Array(n * 9);
    const { positions: p, index: ix } = pm;
    for (let f = 0; f < n; f++) {
      for (let c = 0; c < 3; c++) {
        const v = ix[3 * f + c] * 3;
        pos[9 * f + 3 * c] = p[v];
        pos[9 * f + 3 * c + 1] = p[v + 1];
        pos[9 * f + 3 * c + 2] = p[v + 2];
      }
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(pm.cornerNormals(), 3));
    this.colourAttr = new THREE.BufferAttribute(new Uint8Array(n * 3), 1);
    this.hiAttr = new THREE.BufferAttribute(new Uint8Array(n * 3), 1);
    geo.setAttribute('aColor', this.colourAttr);
    geo.setAttribute('aHi', this.hiAttr);
    geo.computeBoundingSphere();
    this.mesh = new THREE.Mesh(geo, this.material);
    this.root.add(this.mesh);
    this.highlighted = null;
    this.refreshAllColours();

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
    this.frame();
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
    if (!this.paintMesh || !this.colourAttr) return;
    const fc = this.paintMesh.faceColor;
    const arr = this.colourAttr.array as Uint8Array;
    for (let f = 0; f < fc.length; f++) {
      const c = fc[f];
      arr[3 * f] = arr[3 * f + 1] = arr[3 * f + 2] = c;
    }
    this.colourAttr.needsUpdate = true;
    this.invalidate();
  }

  updateFaces(faces: Iterable<number>) {
    if (!this.paintMesh || !this.colourAttr) return;
    const fc = this.paintMesh.faceColor;
    const arr = this.colourAttr.array as Uint8Array;
    for (const f of faces) {
      const c = fc[f];
      arr[3 * f] = arr[3 * f + 1] = arr[3 * f + 2] = c;
    }
    this.colourAttr.needsUpdate = true;
    this.invalidate();
  }

  /** Tint faces (Fill preview), or clear with null. */
  setHighlight(faces: ArrayLike<number> | null, hex?: string) {
    if (!this.hiAttr) return;
    if (faces === this.highlighted) return;
    const arr = this.hiAttr.array as Uint8Array;
    if (this.highlighted) {
      const old = this.highlighted;
      for (let i = 0; i < old.length; i++) {
        const f = old[i];
        arr[3 * f] = arr[3 * f + 1] = arr[3 * f + 2] = 0;
      }
    }
    if (faces) {
      for (let i = 0; i < faces.length; i++) {
        const f = faces[i];
        arr[3 * f] = arr[3 * f + 1] = arr[3 * f + 2] = 1;
      }
      if (hex) this.uniforms.uHiColor.value.set(hex);
    }
    this.highlighted = faces;
    this.hiAttr.needsUpdate = true;
    this.invalidate();
  }

  /** First model face under a screen point. */
  raycast(clientX: number, clientY: number): Hit | null {
    if (!this.bvh || !this.mesh || !this.paintMesh) return null;
    const rect = this.renderer.domElement.getBoundingClientRect();
    const ndc = new THREE.Vector2(((clientX - rect.left) / rect.width) * 2 - 1, -((clientY - rect.top) / rect.height) * 2 + 1);
    const ray = new THREE.Raycaster();
    ray.setFromCamera(ndc, this.camera);
    const local = ray.ray.clone().applyMatrix4(this.root.matrixWorld.clone().invert());
    const hit = this.bvh.raycastFirst(local, THREE.DoubleSide);
    if (!hit || hit.faceIndex == null) return null;
    const n = this.paintMesh.normals();
    const f = hit.faceIndex;
    const normal = new THREE.Vector3(n[3 * f], n[3 * f + 1], n[3 * f + 2]);
    if (normal.dot(local.direction) > 0) normal.negate();
    return { face: f, point: hit.point.clone(), normal };
  }

  /** Faces within `radius` of a point that face the same way (the brush footprint). */
  facesInSphere(point: THREE.Vector3, normal: THREE.Vector3, radius: number, out: Set<number>) {
    if (!this.bvh || !this.paintMesh) return;
    const n = this.paintMesh.normals();
    const sphere = new THREE.Sphere(point, radius);
    const r2 = radius * radius;
    const tmp = new THREE.Vector3();
    this.bvh.shapecast({
      intersectsBounds: (box) => box.intersectsSphere(sphere),
      intersectsTriangle: (tri, f) => {
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
      (m.material as THREE.Material)?.dispose?.();
    }
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
