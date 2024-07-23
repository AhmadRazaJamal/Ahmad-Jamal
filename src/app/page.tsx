'use client'

import { NextUIProvider } from "@nextui-org/react";
import { Canvas } from "@react-three/fiber";
import Portfolio from "./ModelWrapper/ModelWrapper";
import { FullScreenWrapper } from "./LoadingCube/LoadingCube.styles";

export default function Home() {
  return (
    <NextUIProvider>
      <FullScreenWrapper>
        <Canvas
          shadows
          orthographic
        >
          <Portfolio />
        </Canvas>
      </FullScreenWrapper>
    </NextUIProvider>
  );
}
