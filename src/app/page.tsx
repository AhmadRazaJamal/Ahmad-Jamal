'use client'

import { NextUIProvider } from "@nextui-org/react";
import { Canvas } from "@react-three/fiber";
import LoadingScreen from "./Loading/Loading";
import Portfolio from "./ModelWrapper/ModelWrapper";
import { isSmallScreen } from "./utils/constants";

export default function Home() {
  return (
    <NextUIProvider>
      <LoadingScreen>
        <Canvas
          shadows
          orthographic
        >
          <Portfolio />
        </Canvas>
      </LoadingScreen>
    </NextUIProvider>
  );
}
