// pages/index.js
import { useEffect, useRef } from "react";
import * as THREE from "three";
import Box from "./Box";
import { Canvas } from "@react-three/fiber";

export default function Home() {

  const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
//   const canvasRef = useRef();
//   const { setScene, scene, addObject, removeObject } = useStore();
//   const rendererRef = useRef();
//   const cameraRef = useRef();


// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//   useEffect(() => {
//     const newScene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(45, 500 / 500, 1, 500);
//     camera.position.set(0, 0, 100);
//     camera.lookAt(0, 0, 0);
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(500, 500);
//     canvasRef.current.appendChild(renderer.domElement);
//     camera.position.z = 5;

//     const lightDirection = new THREE.DirectionalLight(0xffffff, 1);
//     lightDirection.position.set(0, 0, 100);
//     newScene.add(lightDirection);

//     const lightAmbient = new THREE.AmbientLight(0xffffff, 0.5);
//     newScene.add(lightAmbient);

//     setScene(newScene);
//     rendererRef.current = renderer;
//     cameraRef.current = camera;

//     const animate = () => {
//       requestAnimationFrame(animate);
//       renderer.render(newScene, camera);
//     };
//     animate();
//   }, [setScene]);


  return (
    <div>
      <h1>Collaborative 3D Video Timeline Editor</h1>
      <Canvas>
     <Box />
    </Canvas>
    </div>
  );
}
