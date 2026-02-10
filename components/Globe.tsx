
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Stars, OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

const Earth = () => {
  const meshRef = useRef<THREE.Mesh>(null!);
  
  // Create a high-quality wireframe sphere to represent the globe
  useFrame(({ clock }) => {
    meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
  });

  return (
    <group>
      {/* Main Globe Mesh */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <meshStandardMaterial 
          color="#1e3a8a" 
          wireframe 
          transparent 
          opacity={0.3} 
          emissive="#d4af37"
          emissiveIntensity={0.2}
        />
      </mesh>
      
      {/* Glow effect */}
      <Sphere args={[2.48, 32, 32]}>
        <meshPhongMaterial 
          color="#0ea5e9" 
          transparent 
          opacity={0.1} 
          shininess={100} 
        />
      </Sphere>

      {/* Orbiting Plane simulation */}
      <PlaneTrail />
    </group>
  );
};

const PlaneTrail = () => {
  const planeRef = useRef<THREE.Group>(null!);
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime() * 0.5;
    planeRef.current.position.x = Math.cos(time) * 3.2;
    planeRef.current.position.z = Math.sin(time) * 3.2;
    planeRef.current.position.y = Math.sin(time * 0.5) * 1.5;
    planeRef.current.rotation.y = -time + Math.PI / 2;
  });

  return (
    <group ref={planeRef}>
       <mesh>
          <coneGeometry args={[0.05, 0.2, 8]} />
          <meshStandardMaterial color="#d4af37" emissive="#d4af37" />
       </mesh>
    </group>
  );
};

const Globe3D: React.FC = () => {
  return (
    <div className="w-full h-full min-h-[500px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 7], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#d4af37" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ced1" />
        
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
          <Earth />
        </Float>
        
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default Globe3D;
