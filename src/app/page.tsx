'use client'

import { NextUIProvider } from "@nextui-org/react";
import { Canvas } from "@react-three/fiber";
import LoadingScreen from "./Loading/Loading";
import Portfolio from "./ModelWrapper/ModelWrapper";

export default function Home() {
  console.log(window.innerWidth)
  return (
    <NextUIProvider>
      <LoadingScreen>
        <Canvas
          shadows
          orthographic
          camera={{
            left: -1,
            top: -1,
            bottom: 1,
            right: 1,
            zoom: window.innerWidth * 0.4,
            position: [-2, 1, 2],
          }}
        >
          <Portfolio />
        </Canvas>
      </LoadingScreen>
    </NextUIProvider>
  );
}
