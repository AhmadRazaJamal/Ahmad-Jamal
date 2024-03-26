'use client'

import { NextUIProvider } from "@nextui-org/react";
import { Canvas } from "@react-three/fiber";
import LoadingScreen from "./Loading";
import Portfolio from "./Portfolio";

export default function Home() {
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
            zoom: window.innerWidth * 0.5,
            position: [-2, 1, 2],
          }}
        >
          <Portfolio />
        </Canvas>
      </LoadingScreen>
    </NextUIProvider>
  );
}
