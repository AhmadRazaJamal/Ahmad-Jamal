"use client";

import React, { useEffect, useState } from 'react';
import { FullScreenWrapper, LoadingContainer, CubeWrapper, Cube, CubeFaces, CubeFace } from './Loading.styles';

interface LoadingScreenProps {
    children: React.ReactNode;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {/* {isLoading && (
                <FullScreenWrapper>
                    <LoadingContainer>
                        <CubeWrapper>
                            <Cube>
                                <CubeFaces>
                                    <CubeFace className="cube-face shadow" />
                                    <CubeFace className="cube-face face-bottom"></CubeFace>
                                    <CubeFace className="cube-face face-top"></CubeFace>
                                    <CubeFace className="cube-face face-left"></CubeFace>
                                    <CubeFace className="cube-face face-right"></CubeFace>
                                    <CubeFace className="cube-face face-back"></CubeFace>
                                    <CubeFace className="cube-face face-front"></CubeFace>
                                </CubeFaces>
                            </Cube>
                        </CubeWrapper>
                    </LoadingContainer>
                </FullScreenWrapper>
            )} */}
            <FullScreenWrapper isLoading={isLoading}>
                {children}
            </FullScreenWrapper>
        </>
    );
};

export default LoadingScreen;
