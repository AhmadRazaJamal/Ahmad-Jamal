import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
    children: React.ReactNode;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>{isLoading &&
            <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: '#89c2d9' }}>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', height: '100vh' }}>
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
