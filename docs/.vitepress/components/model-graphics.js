// This module is only imported on mount. Explicit exports keep unused Three.js
// features out of the lazy-loaded graphics bundle.
export {
  ACESFilmicToneMapping,
  CatmullRomCurve3,
  ConeGeometry,
  CylinderGeometry,
  DirectionalLight,
  Group,
  HemisphereLight,
  LatheGeometry,
  LineBasicMaterial,
  LineSegments,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  PCFSoftShadowMap,
  PerspectiveCamera,
  PlaneGeometry,
  Raycaster,
  SRGBColorSpace,
  Scene,
  ShadowMaterial,
  SphereGeometry,
  TorusGeometry,
  Vector2,
  Vector3,
  WireframeGeometry,
  WebGLRenderer
} from 'three'
export { OrbitControls } from 'three/addons/controls/OrbitControls.js'
