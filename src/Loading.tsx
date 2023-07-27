import React, { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Box } from '@react-three/drei';

const MorphObject: React.FC<{ position: [number, number, number]; color: string; size: number }> = ({
    position,
    color,
    size,
}) => {
    const morphRef: any = useRef();

    useFrame(({ clock }) => {
        const time = clock.getElapsedTime();

        if (morphRef.current) {
            morphRef.current.rotation.y += 0.01;
            morphRef.current.rotation.z += 0.01;
        }
    });

    return (
        <Box ref={morphRef} args={[size, size, size]} position={position}>
            <meshStandardMaterial attach="material" color={color} />
        </Box>
    );
};

interface LoadingScreenProps {
    children: React.ReactNode;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [loadingText, setLoadingText] = useState('');
    const loadingFullText = 'Loading...';

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < loadingFullText.length) {
                setLoadingText(loadingFullText.substring(0, i + 1));
                console.log(loadingText)
                i++;
            } else {
                setIsLoading(false);
                clearInterval(timer);
            }
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <>{
            isLoading && <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#87CEEB' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <Canvas>
                        <ambientLight />
                        <pointLight position={[10, 10, 10]} />
                        <group>
                            <MorphObject position={[0, 0.5, 0]} color="#1E90FF" size={1} />
                        </group>
                        <Text
                            position={[0, -1, 0]}
                            rotation={[0, 0, 0]}
                            fontSize={0.3}
                            color="#1E90FF"
                            anchorX="center"
                            anchorY="middle"
                            font={`${process.env.PUBLIC_URL}/fonts/Manrope/static/Manrope-Bold.ttf`}
                        >
                            {loadingText}
                        </Text>
                    </Canvas>
                </div>
            </div>
        }
            <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#87CEEB', opacity: isLoading ? 0 : 1,
                transition: 'opacity 1s ease-in-out'
            }}>
                {children}
            </div>
        </>
    );
};

export default LoadingScreen;
