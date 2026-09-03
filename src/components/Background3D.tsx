import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Background3DProps {
  interactive?: boolean;
}

/**
 * Lightweight, high-performance WebGL 3D Background
 * Built with standard materials and optimized particle buffers for constant 60+ FPS
 */
export const Background3D: React.FC<Background3DProps> = ({ interactive = true }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050507, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 180;
    camera.position.y = 10;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    // Cap pixel ratio to 1.5 to maintain smooth 60fps on Retina displays
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x050507, 0);
    container.appendChild(renderer.domElement);

    // 2. Lights - warm gold luxury illumination
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.45);
    scene.add(ambientLight);

    const goldLight1 = new THREE.PointLight(0xe5c378, 2.5, 450);
    goldLight1.position.set(-100, 60, 60);
    scene.add(goldLight1);

    const goldLight2 = new THREE.PointLight(0xd4af37, 2.0, 450);
    goldLight2.position.set(100, -60, 60);
    scene.add(goldLight2);

    // 3. Particle Starfield (Gold & Champagne Stardust)
    const particleCount = 180;
    const particleGeo = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const initialPositions = new Float32Array(particleCount * 3);
    const velocities: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < particleCount * 3; i += 3) {
      const x = (Math.random() - 0.5) * 440;
      const y = (Math.random() - 0.5) * 300;
      const z = (Math.random() - 0.5) * 320;
      posArray[i] = x;
      posArray[i + 1] = y;
      posArray[i + 2] = z;
      initialPositions[i] = x;
      initialPositions[i + 1] = y;
      initialPositions[i + 2] = z;
      velocities.push({
        x: (Math.random() - 0.5) * 0.08,
        y: (Math.random() - 0.5) * 0.08,
        z: (Math.random() - 0.5) * 0.08,
      });
    }

    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xe5c378,
      size: 2.4,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 4. Floating Geometric Solids (Wireframe & Metallic Polyhedra)
    const groupGeometries = new THREE.Group();
    const geometries = [
      new THREE.OctahedronGeometry(7, 0),
      new THREE.IcosahedronGeometry(8, 0),
      new THREE.TorusGeometry(6, 1.2, 12, 24),
      new THREE.DodecahedronGeometry(6.5, 0),
      new THREE.TetrahedronGeometry(9, 0),
    ];

    // High performance materials - standard rather than heavy physical transmission
    const goldWireMat = new THREE.MeshStandardMaterial({
      color: 0xe5c378,
      metalness: 0.9,
      roughness: 0.2,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
    });

    const metallicGoldMat = new THREE.MeshStandardMaterial({
      color: 0x9b7e3b,
      metalness: 0.85,
      roughness: 0.25,
      transparent: true,
      opacity: 0.35,
    });

    const paleGoldMat = new THREE.MeshBasicMaterial({
      color: 0xf7edd0,
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    });

    const meshItems: {
      mesh: THREE.Mesh;
      baseY: number;
      rotSpeed: { x: number; y: number; z: number };
    }[] = [];

    for (let i = 0; i < 14; i++) {
      const geo = geometries[i % geometries.length];
      const mat = i % 3 === 0 ? goldWireMat : i % 3 === 1 ? metallicGoldMat : paleGoldMat;
      const mesh = new THREE.Mesh(geo, mat);

      const px = (Math.random() - 0.5) * 360;
      const py = (Math.random() - 0.5) * 220;
      const pz = (Math.random() - 0.5) * 240 - 20;

      mesh.position.set(px, py, pz);
      const scale = Math.random() * 1.2 + 0.6;
      mesh.scale.set(scale, scale, scale);

      groupGeometries.add(mesh);
      meshItems.push({
        mesh,
        baseY: py,
        rotSpeed: {
          x: (Math.random() - 0.5) * 0.012,
          y: (Math.random() - 0.5) * 0.012,
          z: (Math.random() - 0.5) * 0.008,
        },
      });
    }
    scene.add(groupGeometries);

    // 5. Mouse Parallax & Scroll Parallax
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    let scrollY = window.scrollY;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      mouse.targetX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.targetY = -(e.clientY / window.innerHeight - 0.5) * 2;
    };

    const handleScroll = () => {
      scrollY = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    // 6. Resize handler
    const handleResize = () => {
      if (!renderer || !camera) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Pause rendering when tab is inactive to save resources
    let isTabActive = !document.hidden;
    const handleVisibilityChange = () => {
      isTabActive = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // 7. Animation Loop
    let animId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isTabActive) return;

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Camera reactions
      camera.position.x = mouse.x * 16;
      camera.position.y = 10 + mouse.y * 12 - scrollY * 0.03;
      camera.lookAt(0, -scrollY * 0.03, 0);

      // Rotate group gently
      groupGeometries.rotation.y = elapsedTime * 0.025 + mouse.x * 0.15;
      groupGeometries.rotation.x = mouse.y * 0.1;

      // Floating meshes animation
      for (let i = 0; i < meshItems.length; i++) {
        const item = meshItems[i];
        item.mesh.rotation.x += item.rotSpeed.x;
        item.mesh.rotation.y += item.rotSpeed.y;
        item.mesh.rotation.z += item.rotSpeed.z;
        item.mesh.position.y = item.baseY + Math.sin(elapsedTime * 1.2 + i) * 6;
      }

      // Drift particles with bounds
      const positions = particleGeo.attributes.position.array as Float32Array;
      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        positions[i3] += velocities[i].x;
        positions[i3 + 1] += velocities[i].y;
        positions[i3 + 2] += velocities[i].z;

        if (Math.abs(positions[i3] - initialPositions[i3]) > 25) velocities[i].x *= -1;
        if (Math.abs(positions[i3 + 1] - initialPositions[i3 + 1]) > 25) velocities[i].y *= -1;
        if (Math.abs(positions[i3 + 2] - initialPositions[i3 + 2]) > 25) velocities[i].z *= -1;
      }
      particleGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      geometries.forEach((g) => g.dispose());
      goldWireMat.dispose();
      metallicGoldMat.dispose();
      paleGoldMat.dispose();
    };
  }, [interactive]);

  return (
    <div
      ref={containerRef}
      id="canvas-3d-background"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
};
