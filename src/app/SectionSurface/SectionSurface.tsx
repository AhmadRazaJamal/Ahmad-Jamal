import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useScroll } from '@react-three/drei';

interface SectionSurfaceProps {
  start: number;
  color: string;
  yPosition: number;
}

const SectionSurface: React.FC<SectionSurfaceProps> = ({ start, color, yPosition }) => {
  const ref = useRef<Mesh>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (ref.current) {
      // Calculate the scaling factor based on scroll offset
      const scale = Math.max(0, Math.min(scroll.offset - start, 1)) * 200; // Adjust this scaling factor as needed to increase/decrease the speed of the surface

      // Set the scale of the object
      ref.current.scale.set(scale, scale, scale);
    }
  });

  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, yPosition, 0]}>
      <circleGeometry args={[1, 64]} />
      <meshBasicMaterial color={color} toneMapped transparent opacity={0.85} />
    </mesh>
  );
};

export default SectionSurface;
