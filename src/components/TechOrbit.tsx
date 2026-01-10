import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, OrbitControls } from '@react-three/drei';

const technologies = [
  { name: 'React', color: '#61dafb', position: [2, 0, 0] as [number, number, number] },
  { name: 'Spring', color: '#6db33f', position: [0, 2, 0] as [number, number, number] },
  { name: 'Python', color: '#3776ab', position: [-2, 0, 0] as [number, number, number] },
  { name: 'AWS', color: '#ff9900', position: [0, -2, 0] as [number, number, number] },
  { name: 'K8s', color: '#326ce5', position: [1.5, 1.5, 0] as [number, number, number] },
  { name: 'PostgreSQL', color: '#336791', position: [-1.5, -1.5, 0] as [number, number, number] },
];

interface TechSphereProps {
  name: string;
  color: string;
  position: [number, number, number];
  hovered: string | null;
  setHovered: (name: string | null) => void;
}

function TechSphere({ name, color, position, hovered, setHovered }: TechSphereProps) {
  const meshRef = useRef<any>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh 
        ref={meshRef} 
        position={position}
        onPointerOver={() => setHovered(name)}
        onPointerOut={() => setHovered(null)}
        scale={hovered === name ? 1.2 : 1}
      >
        <icosahedronGeometry args={[0.4, 1]} />
        <meshPhysicalMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          roughness={0.1}
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0}
        />
        <Html distanceFactor={10}>
          <div 
            className={`px-3 py-1 rounded-full text-white text-sm font-bold transition-all duration-300 ${
              hovered === name ? 'opacity-100 scale-110' : 'opacity-0'
            }`} 
            style={{ backgroundColor: color }}
          >
            {name}
          </div>
        </Html>
      </mesh>
    </Float>
  );
}

function OrbitSystem() {
  const orbitRef = useRef<any>(null);
  const [hovered, setHovered] = useState<string | null>(null);

  useFrame((state) => {
    if (orbitRef.current) {
      orbitRef.current.rotation.y = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <group ref={orbitRef}>
      {technologies.map((tech) => (
        <TechSphere 
          key={tech.name} 
          {...tech} 
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
      {/* Center orb */}
      <mesh>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          roughness={0}
          metalness={1}
        />
      </mesh>
    </group>
  );
}

export default function TechOrbit() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        <OrbitSystem />
        {/* Add OrbitControls for user interaction */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={true}
          autoRotate={true}
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}