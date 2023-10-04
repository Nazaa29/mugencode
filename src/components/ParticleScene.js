import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const ParticleScene = () => {
  const containerRef = useRef();
  const animationFrameIdRef = useRef();
  const [isReady, setIsReady] = useState(true); // Nuevo estado para controlar la visibilidad

  useEffect(() => {
    console.log("ParticleScene renderizado");
    const container = containerRef.current;
    let { offsetWidth: width, offsetHeight: height } = container;
    let aspectRatio = width / height;
    const camera = new THREE.PerspectiveCamera(45, aspectRatio, 1, 4000);
    camera.position.z = Math.min(width, height) / 2;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const particleCount = 50;
    const segments = (particleCount * (particleCount - 1)) / 2;
    const positions = new Float32Array(segments * 3);
    const colors = new Float32Array(segments * 3);

    const particlesData = [];
    const r = Math.min(width, height) / 2;
    const rHalf = r / 2;

    const particles = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * r - r / 2;
      const y = Math.random() * r - r / 2;
      const z = Math.random() * r - r / 2;

      particlePositions[i * 3] = x;
      particlePositions[i * 3 + 1] = y;
      particlePositions[i * 3 + 2] = z;

      particlesData.push({
        velocity: new THREE.Vector3(
          (-1 + Math.random() * 2) * 2,
          (-1 + Math.random() * 2) * 2,
          (-1 + Math.random() * 2) * 2
        ),
        numConnections: 0,
      });
    }

    particles.setDrawRange(0, particleCount);
    particles.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3).setUsage(
        THREE.DynamicDrawUsage
      )
    );

    const pMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 5,
      blending: THREE.AdditiveBlending,
      transparent: true,
      sizeAttenuation: false,
    });

    const pointCloud = new THREE.Points(particles, pMaterial);
    group.add(pointCloud);

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3).setUsage(THREE.DynamicDrawUsage)
    );
    geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(colors, 3).setUsage(THREE.DynamicDrawUsage)
    );
    geometry.computeBoundingSphere();
    geometry.setDrawRange(0, 0);

    const material = new THREE.LineBasicMaterial({
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      transparent: true,
      opacity: 0.5,
      linewidth: 10,
    });

    const linesMesh = new THREE.LineSegments(geometry, material);
    group.add(linesMesh);

    function updateSize() {
      console.log("updateSize called");
      // Actualizar las dimensiones
      ({ offsetWidth: width, offsetHeight: height } = container);
      aspectRatio = width / height;
      camera.aspect = aspectRatio;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      camera.position.z = Math.min(width, height) / 2;
    }

    function animate() {
      console.log("animate called");
      let halfWidth = width / 2;
      let halfHeight = height / 2;
      for (let i = 0; i < particleCount; i++) {
        if (
          particlePositions[i * 3] > halfWidth ||
          particlePositions[i * 3] < -halfWidth
        ) {
          particlesData[i].velocity.x = -particlesData[i].velocity.x;
        }
        if (
          particlePositions[i * 3 + 1] > halfHeight ||
          particlePositions[i * 3 + 1] < -halfHeight
        ) {
          particlesData[i].velocity.y = -particlesData[i].velocity.y;
        }
        if (
          particlePositions[i * 3 + 2] > rHalf ||
          particlePositions[i * 3 + 2] < -rHalf
        ) {
          particlesData[i].velocity.z = -particlesData[i].velocity.z;
        }

        particlePositions[i * 3] += particlesData[i].velocity.x;
        particlePositions[i * 3 + 1] += particlesData[i].velocity.y;
        particlePositions[i * 3 + 2] += particlesData[i].velocity.z;
      }

      // Reset numConnections for every particle
      for (let i = 0; i < particleCount; i++) {
        particlesData[i].numConnections = 0;
      }

      let vertexpos = 0;
      let colorpos = 0;
      let numConnected = 0;

      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particlePositions[i * 3] - particlePositions[j * 3];
          const dy =
            particlePositions[i * 3 + 1] - particlePositions[j * 3 + 1];
          const dz =
            particlePositions[i * 3 + 2] - particlePositions[j * 3 + 2];
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < 100) {
            positions[vertexpos++] = particlePositions[i * 3];
            positions[vertexpos++] = particlePositions[i * 3 + 1];
            positions[vertexpos++] = particlePositions[i * 3 + 2];

            positions[vertexpos++] = particlePositions[j * 3];
            positions[vertexpos++] = particlePositions[j * 3 + 1];
            positions[vertexpos++] = particlePositions[j * 3 + 2];

            colors[colorpos++] = 1;
            colors[colorpos++] = 1;
            colors[colorpos++] = 1;

            colors[colorpos++] = 1;
            colors[colorpos++] = 1;
            colors[colorpos++] = 1;

            particlesData[i].numConnections++;
            particlesData[j].numConnections++;

            numConnected++;
          }
        }
      }

      linesMesh.geometry.setDrawRange(0, numConnected * 2);
      linesMesh.geometry.attributes.position.needsUpdate = true;
      linesMesh.geometry.attributes.color.needsUpdate = true;
      pointCloud.geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
      console.log(numConnected); // Log the number of connections
      animationFrameIdRef.current = requestAnimationFrame(animate);
    }

    setTimeout(() => {
      updateSize();
      animate();
      setIsReady(true);
    }, 0);

    window.addEventListener("resize", updateSize); // Escuchar el evento de redimensionamiento

    return () => {
      cancelAnimationFrame(animationFrameIdRef.current);
      window.removeEventListener("resize", updateSize); // Limpiar el listener del evento
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      particles.dispose();
      pMaterial.dispose();
      pointCloud.geometry.dispose();
      linesMesh.geometry.dispose();
      // ... other necessary cleanup ...
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ width: "100%", height: "100%" }}
      className={isReady ? "visible" : "hidden"} // Controlar la visibilidad
    />
  );
};

export default ParticleScene;
