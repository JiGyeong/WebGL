import './App.css';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from 'three'
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

class App extends Component {
    componentDidMount() {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        this.mount.appendChild(renderer.domElement);
        renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
const controls = new OrbitControls(camera, renderer.domElement);



const moonTexture = new THREE.TextureLoader().load('./img/moon.jpg');
const normalTexture = new THREE.TextureLoader().load('./img/normal.jpg');
const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({map:moonTexture, normalMap:normalTexture})
)
scene.add(moon);


        const light = new THREE.HemisphereLight(0xffffbb);
        scene.add(light);
        camera.position.z = 30;


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

        const animate = function () {
            requestAnimationFrame(animate);
            moon.rotation.x += 0.01;
  moon.rotation.y += 0.005;
  moon.rotation.z += 0.01;

  controls.update();
            renderer.render(scene, camera);
        };
        animate();
    }
    render() {
        return (
            <div ref={ref => (this.mount = ref)} />
        )
    }
}
const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement);
export default App;