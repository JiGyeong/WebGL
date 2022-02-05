import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Portfolio from './Portfolio';

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
            new THREE.MeshStandardMaterial({ map: moonTexture, normalMap: normalTexture })
        )
        moon.position.x = 40;
        moon.position.y = 0;
        scene.add(moon);

        const earthTexture = new THREE.TextureLoader().load('./img/earth.jpg');
        const earth = new THREE.Mesh(
            new THREE.SphereGeometry(12, 32, 32),
            new THREE.MeshStandardMaterial({ map: earthTexture})
        )
        earth.position.x = 25;
        earth.position.y = 15;
        earth.position.z = -10;
        scene.add(earth);


        const light = new THREE.HemisphereLight(0xffffbb);
        scene.add(light);
        camera.position.z = 50;

        function addStar() {
            const geomerty = new THREE.SphereGeometry(0.25, 30, 30);
            const material = new THREE.MeshStandardMaterial({ color: 0xFFFFFF });
            const star = new THREE.Mesh(geomerty, material);

            const [x, y, z] = new Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

            star.position.set(x, y, z);
            scene.add(star);
        }

        Array(200).fill().forEach(addStar);

        const spaceTexture = new THREE.TextureLoader().load('./img/space.jpg');
        scene.background = spaceTexture;

        function moveCamera() {
            const t = document.body.getBoundingClientRect().top;

            camera.position.z = 50 + t * -0.05;
            camera.position.x = t * -0.0002;
            camera.rotation.y = t * -0.0002;
        }

        document.body.onscroll = moveCamera;
        moveCamera();

        const animate = function () {
            requestAnimationFrame(animate);
            // moon.rotation.x += 0.01;
            moon.rotation.y += 0.05;
            moon.rotation.z += 0.01;

            earth.rotation.y += 0.005;

            controls.update();
            renderer.render(scene, camera);
        };
        animate();
    }
    render() {
        return (
            <>
                <Portfolio/>
                <div ref={ref => (this.mount = ref)} />
            </>
        )
    }
}
const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement);
export default App;