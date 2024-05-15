    <script src="https://cdn.jsdelivr.net/npm/three@0.132.2/build/three.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/loaders/OBJLoader.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/three@0.132.2/examples/js/controls/OrbitControls.js"></script>
const initThree = () => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x050555);
    scene.fog = new THREE.Fog(0x050505, 2000, 3500);

    const width = window.innerWidth, height = window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);

    scene.add(new THREE.AmbientLight(0x111111));

    const light1 = new THREE.DirectionalLight(0xffffff, 0.5);
    light1.position.set(1, 1, 1);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 1.5);
    light2.position.set(0, -1, 0);
    scene.add(light2);

}; 
//import * as OrbitControls from "https://stemkoski.github.io/Three.js/js/OrbitControls.js";
//import * as OrbitControls from './OrbitControls.js';
initThree();
//import * as OBJLoader from 'https://cdn.skypack.dev/three/examples/jsm/loaders/OBJLoader.js';
//THREE.OrbitControls = OrbitControls;

import * as OBJLoader from './index.js';
THREE.OBJLoader = OBJLoader;
    const loader = new OBJLoader();
    loader.load(
        './oloid256_quad.obj',
        function (object) {
            scene.add(object);

         
        },
        function (xhr) {
            console.log((xhr.loaded / xhr.total * 100) + '% loaded');
        },
        function (error) {
            console.log('An error happened');
        }
    );
	
const renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setSize(width, height);
            renderer.setAnimationLoop(animate);
            document.body.appendChild(renderer.domElement);
            
        //    const controls = new THREE.OrbitControls(camera, renderer.domElement);
      //      controls.enableDamping = true;
            function animate(time) {
                requestAnimationFrame(animate);
				
    //            controls.update();
                renderer.render(scene, camera);
            }

//export default THREE;