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
            isLoading && <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#89c2d9' }}>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                    <div className="scene">
                        <div className="cube-wrapper">
                            <div className="cube">
                                <div className="cube-faces">
                                    <div className="cube-face shadow"></div>
                                    <div className="cube-face face-bottom"></div>
                                    <div className="cube-face face-top"></div>
                                    <div className="cube-face face-left"></div>
                                    <div className="cube-face face-right"></div>
                                    <div className="cube-face face-back"></div>
                                    <div className="cube-face face-front"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
            <div style={{
                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#89c2d9', opacity: isLoading ? 0 : 1,
                transition: 'opacity 1s ease-in-out'
            }}>
                {children}
            </div>
        </>
    );
};

export default LoadingScreen;
