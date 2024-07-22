import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { useScroll } from '@react-three/drei';

type ScrollingSurfaceProps = {
    start: number;
    color: string;
    yPosition: number;
};

const ScrollingSurface: React.FC<ScrollingSurfaceProps> = ({ start, color, yPosition }) => {
    const ref = useRef<Mesh>(null);
    const scroll = useScroll();

    useFrame(() => {
        if (ref.current) {
            // Calculate the scaling factor based on scroll offset
            let scale = Math.max(0, Math.min(scroll.offset - start, 1)) * 200; // Adjust this scaling factor as needed

            // Set the scale of the object
            ref.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, yPosition, 0]}>
            <circleGeometry args={[1, 64]} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
};

export default ScrollingSurface;
