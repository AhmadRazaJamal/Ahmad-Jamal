import React from 'react';
import { CubeWrapper, Cube, CubeFaces, CubeFace } from './LoadingCube.styles';

const LoadingCube: React.FC = () => (
  <CubeWrapper>
    <Cube>
      <CubeFaces>
        <CubeFace className="cube-face shadow" />
        <CubeFace className="cube-face face-bottom" />
        <CubeFace className="cube-face face-top" />
        <CubeFace className="cube-face face-left" />
        <CubeFace className="cube-face face-right" />
        <CubeFace className="cube-face face-back" />
        <CubeFace className="cube-face face-front" />
      </CubeFaces>
    </Cube>
  </CubeWrapper>
);

export default LoadingCube;
