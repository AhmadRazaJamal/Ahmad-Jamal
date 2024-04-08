'use client'

import { NextUIProvider } from "@nextui-org/react";
import { Canvas } from "@react-three/fiber";
import LoadingScreen from "./Loading/Loading";
import Portfolio from "./ModelWrapper/ModelWrapper";
import { isSmallScreen } from "./utils/constants";

export default function Home() {
  console.log(window.innerWidth)
  return (
    <NextUIProvider>
      <LoadingScreen>
        <Canvas
          shadows
          orthographic
          camera={{
            zoom: isSmallScreen ?  window.innerWidth * 0.4 : window.innerWidth * 0.23,
            position: [-2, 1, 2],
          }}
        >
          <Portfolio />
        </Canvas>
      </LoadingScreen>
    </NextUIProvider>
  );
}
