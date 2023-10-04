import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticleScene = () => {
  const containerRef = useRef();

  useEffect(() => {
    console.log("ParticleScene renderizado");
    const container = containerRef.current;
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      4000
    );
    camera.position.z = 1750;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    console.log("Adding canvas to DOM", renderer.domElement);
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const particleCount = 50; // Reduced particle count
    const segments = (particleCount * (particleCount - 1)) / 2;
    const positions = new Float32Array(segments * 3);
    const colors = new Float32Array(segments * 3);

    const particlesData = [];
    const r = 800;
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
          (-1 + Math.random() * 2) * 2, // Multiplicado por 3
          (-1 + Math.random() * 2) * 2, // Multiplicado por 3
          (-1 + Math.random() * 2) * 2 // Multiplicado por 3
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

    function animate() {
      for (let i = 0; i < particleCount; i++) {
        // Revisar si las partículas están fuera de los límites y en caso afirmativo, invertir su dirección
        if (
          particlePositions[i * 3] > rHalf ||
          particlePositions[i * 3] < -rHalf
        ) {
          particlesData[i].velocity.x = -particlesData[i].velocity.x;
        }
        if (
          particlePositions[i * 3 + 1] > rHalf ||
          particlePositions[i * 3 + 1] < -rHalf
        ) {
          particlesData[i].velocity.y = -particlesData[i].velocity.y;
        }
        if (
          particlePositions[i * 3 + 2] > rHalf ||
          particlePositions[i * 3 + 2] < -rHalf
        ) {
          particlesData[i].velocity.z = -particlesData[i].velocity.z;
        }

        // Actualizar las posiciones de las partículas
        particlePositions[i * 3] += particlesData[i].velocity.x;
        particlePositions[i * 3 + 1] += particlesData[i].velocity.y;
        particlePositions[i * 3 + 2] += particlesData[i].velocity.z;
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
      requestAnimationFrame(animate);
    }

    animate();

    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    window.addEventListener("resize", onWindowResize);

    return () => {
      window.removeEventListener("resize", onWindowResize);
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

  return <div ref={containerRef} style={{ width: "100%", height: "100%" }} />;
};

export default ParticleScene;
