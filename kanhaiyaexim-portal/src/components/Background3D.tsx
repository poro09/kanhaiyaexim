import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog('#fcfbf7', 10, 45);

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor('#fcfbf7', 0);
    mountRef.current.appendChild(renderer.domElement);

    // PARTICLES
    const particlesGeo = new THREE.BufferGeometry();
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);
    for(let i=0; i<particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 40;
    }
    particlesGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
        size: 0.08,
        color: '#064e3b',
        transparent: true,
        opacity: 0.15,
    });
    const particlesMesh = new THREE.Points(particlesGeo, particlesMat);
    scene.add(particlesMesh);

    // LIGHTING
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
    scene.add(ambientLight);

    // MOUSE INTERACTION
    let mouseX = 0;
    let mouseY = 0;

    const onDocumentMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = (event.clientY / window.innerHeight) * 2 - 1;
    };
    document.addEventListener('mousemove', onDocumentMouseMove);

    // RESIZE EVENT
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // ANIMATION LOOP
    const startTime = performance.now();

    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = (performance.now() - startTime) * 0.001;

      // Slow drift combined with soft mouse parallax
      particlesMesh.position.y = Math.sin(elapsedTime * 0.05) * 0.5 + (mouseY * -0.5);
      particlesMesh.position.x = mouseX * 0.5;
      particlesMesh.rotation.y = elapsedTime * 0.01;

      renderer.render(scene, camera);
    };
    animate();

    // CLEANUP
    return () => {
      document.removeEventListener('mousemove', onDocumentMouseMove);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
      particlesGeo.dispose();
      particlesMat.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="fixed inset-0 z-[-1] pointer-events-none bg-transparent"
      aria-hidden="true"
    />
  );
}
