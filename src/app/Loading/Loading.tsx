"use client";

import { CubeWrapper, Cube, CubeFaces, CubeFace } from './Loading.styles';

const LoadingCube = () => {
    return (
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
    );
};

export default LoadingCube;
