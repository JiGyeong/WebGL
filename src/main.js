import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene(); // container
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1 , 1000);
const renderer = new THREE.WebGLRenderer({
  canvas:document.querySelector('#bg')
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, innerHeight);
camera.position.setZ(30);



const geomerty = new THREE.TorusGeometry(10, 3,16,100);
const material = new THREE.MeshStandardMaterial({color:0xFF6347});
const torus = new THREE.Mesh(geomerty, material);
scene.add(torus);

const pointLight = new THREE.PointLight(0xFFFFFF);
pointLight.position.set(5,5,5);
const ambientLight = new THREE.AmbientLight(0xFFFFFF);
scene.add(pointLight,ambientLight);

// const lightHelper = new THREE.PointLightHelper(pointLight);
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper,gridHelper);

const controls = new OrbitControls(camera, renderer.domElement);

function addStar(){
  const geomerty = new THREE.SphereGeometry(0.25, 1, 1);
  const material = new THREE.MeshStandardMaterial({color:0xFFFFFF});
  const star = new THREE.Mesh(geomerty,material);

  const [x,y,z] = new Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x,y,z);
  scene.add(star);
}

Array(200).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('./img/space.jpg');
scene.background = spaceTexture;

const moonTexture = new THREE.TextureLoader().load('./img/moon.jpg');
const normalTexture = new THREE.TextureLoader().load('./img/normal.jpg');
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({map:moonTexture, normalMap:normalTexture})
)
scene.add(moon);


// renderer.render(scene, camera);
function animate(){
  requestAnimationFrame(animate);

  torus.rotation.x += 0.03;
  torus.rotation.y += 0.003;
  torus.rotation.z += 0.03;

  moon.rotation.x += 0.01;
  moon.rotation.y += 0.005;
  moon.rotation.z += 0.01;

  controls.update();

  renderer.render(scene, camera);
}

animate();