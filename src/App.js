// pages/index.js
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useStore } from './stores/store'

export default function Home() {
  const canvasRef = useRef()
  const { setScene, scene, addObject, removeObject } = useStore()
  const rendererRef = useRef()
  const cameraRef = useRef()

  useEffect(() => {
    const newScene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );
    const renderer = new THREE.WebGLRenderer()
    renderer.setSize(500, 500)
    canvasRef.current.appendChild(renderer.domElement)
    camera.position.z = 5

    const lightDirection = new THREE.DirectionalLight(0xffffff, 1)
    lightDirection.position.set(0, 0, 5)
    newScene.add(lightDirection)

    const lightAmbient = new THREE.AmbientLight(0xffffff, 0.5)
    newScene.add(lightAmbient)

    setScene(newScene)
    rendererRef.current = renderer
    cameraRef.current = camera

    const animate = () => {
      requestAnimationFrame(animate)
      renderer.render(newScene, camera)
    }
    animate()
  }, [setScene])

  const handleAddObject = () => {
    console.log('add object', canvasRef.current)
    if (!canvasRef.current) {
      console.error('Canvas ref is empty. Ensure the canvas element is rendered correctly.')
      return
    }
    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    scene.add(cube)
    addObject(cube)

    console.log(scene)
  }

  const handleRemoveObject = (objectId) => {
    console.log("remove object")
    console.log(objectId)
    removeObject(objectId)
  }

  const handleUpdateObject = (objectId, newObject) => {
    console.log("update object")
    console.log(objectId)
    console.log(newObject)
    // updateObject(objectId, newObject)
  }

  return (
    <div>
      <h1>Collaborative 3D Video Timeline Editor</h1>
      <div>
        <button onClick={handleAddObject}>Add Object</button>
        <button onClick={handleRemoveObject}>Remove Object</button>
        <button onClick={handleUpdateObject}>Update Object</button>
      </div>
      <canvas height={1000} width={1500} style={{ border: '1px solid black', backgroundColor: 'black' }} ref={canvasRef} />
    </div>
  )
}
