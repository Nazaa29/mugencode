import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticleScene = () => {
  const containerRef = useRef();

  useEffect(() => {
    const container = containerRef.current;
    let width = container.offsetWidth;
    let height = container.offsetHeight;

    // Crear escena, cámara y renderizador
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0); // El segundo argumento es la transparencia, 0 es totalmente transparente
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    // Crear geometría y material, luego mesh
    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // Posicionar la cámara
    camera.position.z = 5;

    // Función de animación
    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };

    // Función para actualizar el tamaño
    const updateSize = () => {
      width = container.offsetWidth;
      height = container.offsetHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    // Escuchar el evento de cambio de tamaño de la ventana
    window.addEventListener("resize", updateSize);

    animate();

    return () => {
      // Limpiar en desmontaje
      window.removeEventListener("resize", updateSize);
      renderer.dispose();
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default ParticleScene;
