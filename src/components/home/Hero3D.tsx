import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Float, Sphere, MeshDistortMaterial, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = () => {
    const meshRef = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const { clock } = state;
        if (meshRef.current) {
            meshRef.current.rotation.x = clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={2}>
            <Sphere ref={meshRef} args={[1, 100, 100]} scale={2.4}>
                <MeshDistortMaterial
                    color="#6366f1"
                    attach="material"
                    distort={0.4}
                    speed={1.5}
                    roughness={0}
                    metalness={1}
                />
            </Sphere>
        </Float>
    );
};

const Hero3D = () => {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={1} />
                <directionalLight position={[10, 10, 5]} intensity={2} />
                <pointLight position={[-10, -10, -5]} intensity={1} />
                <AnimatedSphere />
                <OrbitControls enableZoom={false} autoRotate />
            </Canvas>
        </div>
    );
};

export default Hero3D;
