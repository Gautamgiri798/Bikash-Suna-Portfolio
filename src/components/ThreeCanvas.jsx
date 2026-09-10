import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeCanvas() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene & Perspective Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 7.5;

    // 2. High-Performance WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // 3. Dynamic Animated Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const purpleLight = new THREE.PointLight(0x7c3aed, 10, 40);
    purpleLight.position.set(6, 5, 7);
    scene.add(purpleLight);

    const cyanLight = new THREE.PointLight(0x06b6d4, 9, 40);
    cyanLight.position.set(-6, -5, 7);
    scene.add(cyanLight);

    const emeraldLight = new THREE.PointLight(0x10b981, 4, 30);
    emeraldLight.position.set(0, 4, 5);
    scene.add(emeraldLight);

    // 4. 3D Cinematic Gyro Assembly (Film Reel Representation)
    const gyroGroup = new THREE.Group();
    scene.add(gyroGroup);

    // Outer Torus Ring (Violet Chrome)
    const outerRingGeo = new THREE.TorusGeometry(3.3, 0.09, 16, 100);
    const outerRingMat = new THREE.MeshStandardMaterial({
      color: 0x7c3aed,
      emissive: 0x4c1d95,
      emissiveIntensity: 0.6,
      metalness: 0.9,
      roughness: 0.15,
    });
    const outerRing = new THREE.Mesh(outerRingGeo, outerRingMat);
    gyroGroup.add(outerRing);

    // Middle Torus Ring (Electric Cyan)
    const midRingGeo = new THREE.TorusGeometry(2.6, 0.07, 16, 80);
    const midRingMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 0.7,
      metalness: 0.95,
      roughness: 0.1,
    });
    const midRing = new THREE.Mesh(midRingGeo, midRingMat);
    midRing.rotation.x = Math.PI / 4;
    gyroGroup.add(midRing);

    // Inner Torus Ring (Deep Royal Blue)
    const innerRingGeo = new THREE.TorusGeometry(1.9, 0.05, 16, 60);
    const innerRingMat = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      emissive: 0x1e40af,
      emissiveIntensity: 0.5,
      metalness: 0.85,
      roughness: 0.2,
    });
    const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
    innerRing.rotation.y = Math.PI / 3;
    gyroGroup.add(innerRing);

    // Central Floating Hologram Crystal
    const coreGeo = new THREE.IcosahedronGeometry(0.85, 1);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.6,
      roughness: 0.05,
      metalness: 0.95,
      wireframe: true,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    gyroGroup.add(coreMesh);

    // Floating Timeline Spiral Tube (Simulating Video Timeline Tape)
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-4, -2.5, -2),
      new THREE.Vector3(-2, -0.5, 1),
      new THREE.Vector3(0, 1.5, -1),
      new THREE.Vector3(2, 0, 2),
      new THREE.Vector3(4, -1.8, -1),
    ]);
    const tubeGeo = new THREE.TubeGeometry(curve, 70, 0.04, 8, false);
    const tubeMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.8,
      transparent: true,
      opacity: 0.65,
    });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    scene.add(tubeMesh);

    // 5. 3D Particle Universe (1,200 Floating Stars)
    const particleCount = 1200;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const cPurple = new THREE.Color(0x7c3aed);
    const cCyan = new THREE.Color(0x06b6d4);
    const cWhite = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 32;
      positions[i + 1] = (Math.random() - 0.5) * 24;
      positions[i + 2] = (Math.random() - 0.5) * 24;

      const rand = Math.random();
      const color = rand > 0.6 ? cCyan : rand > 0.25 ? cPurple : cWhite;
      colors[i] = color.r;
      colors[i + 1] = color.g;
      colors[i + 2] = color.b;
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.055,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Interactive Mouse & Parallax Physics
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth - 0.5) * 2;
      mouseY = -(e.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 7. Scroll Parallax Tracking
    let targetScroll = 0;
    let currentScroll = 0;

    const handleScroll = () => {
      targetScroll = window.scrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // 8. Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    window.addEventListener('resize', handleResize);

    // 8. Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.045;
      targetY += (mouseY - targetY) * 0.045;

      // Smooth scroll lerp
      const prevScroll = currentScroll;
      currentScroll += (targetScroll - currentScroll) * 0.06;
      const scrollDelta = currentScroll - prevScroll;

      // Rotate individual gyro rings
      outerRing.rotation.x = elapsedTime * 0.35 + currentScroll * 0.001;
      outerRing.rotation.y = elapsedTime * 0.25;

      midRing.rotation.y = elapsedTime * 0.45 + currentScroll * 0.0015;
      midRing.rotation.z = elapsedTime * 0.35;

      innerRing.rotation.x = -elapsedTime * 0.4;
      innerRing.rotation.z = -elapsedTime * 0.3 + currentScroll * 0.001;

      coreMesh.rotation.x = elapsedTime * 0.6;
      coreMesh.rotation.y = elapsedTime * 0.7;

      // Whole gyro moves with cursor and scroll tilt
      gyroGroup.rotation.y = targetX * 0.85;
      gyroGroup.rotation.x = -targetY * 0.65 - scrollDelta * 0.02;
      gyroGroup.rotation.z = currentScroll * 0.0008;
      gyroGroup.position.x = targetX * 0.6;
      gyroGroup.position.y = targetY * 0.45 - currentScroll * 0.002;

      // Camera gently tilts and adjusts on scroll
      camera.position.y = -currentScroll * 0.0015;
      camera.rotation.x = -scrollDelta * 0.004;

      // Timeline Ribbon subtle waving
      tubeMesh.rotation.z = Math.sin(elapsedTime * 0.5) * 0.15 + currentScroll * 0.001;
      tubeMesh.position.y = Math.cos(elapsedTime * 0.7) * 0.2 - currentScroll * 0.002;

      // Particle Drift
      particles.rotation.y = elapsedTime * 0.035 + currentScroll * 0.0005;
      particles.rotation.x = elapsedTime * 0.025;

      // Pulsing Lights
      purpleLight.intensity = 8 + Math.sin(elapsedTime * 2) * 3;
      cyanLight.intensity = 7 + Math.cos(elapsedTime * 2) * 3;

      renderer.render(scene, camera);
    };

    animate();

    // 9. Memory Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      outerRingGeo.dispose();
      outerRingMat.dispose();
      midRingGeo.dispose();
      midRingMat.dispose();
      innerRingGeo.dispose();
      innerRingMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      tubeGeo.dispose();
      tubeMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} className="three-canvas-container" aria-hidden="true" />;
}
