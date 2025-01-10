// ThreeScene.js
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';


const ThreeScene = () => {
  const sceneRef = useRef(null); // Reference to the div element

  useEffect(() => {
    const scene = new THREE.Scene(); // Create a scene
    const camera = new THREE.PerspectiveCamera(
      75, // Field of view
      window.innerWidth / window.innerHeight, // Aspect ratio
      0.1, // Near plane
      1000 // Far plane
    );
    const renderer = new THREE.WebGLRenderer(); // Create a WebGL renderer
    renderer.setSize(window.innerWidth, window.innerHeight); // Set the renderer size
    sceneRef.current.appendChild(renderer.domElement); // Append the renderer to the DOM

    // Create a cube
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00bcd4 }); // Cube color
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube); // Add the cube to the scene

    camera.position.z = 5; // Set the camera position

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate); // Request the next animation frame
      cube.rotation.x += 0.01; // Rotate the cube along the X axis
      cube.rotation.y += 0.01; // Rotate the cube along the Y axis
      renderer.render(scene, camera); // Render the scene with the camera
    };
    animate(); // Start the animation

    // Adjust the scene and camera when the window is resized
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
   <>
   <h1>hi</h1>
   
   <div
      ref={sceneRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        overflow: 'hidden',
      }}
    />
   </>
  );
};

export default ThreeScene;
