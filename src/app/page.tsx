"use client";

import { FullScreenWrapper } from "./LoadingCube/LoadingCube.styles";
import Portfolio from "./ModelWrapper/ModelWrapper";
import { NextUIProvider } from "@nextui-org/react";
import { Canvas } from "@react-three/fiber";

const Home = () => {
  return (
    <NextUIProvider>
      <FullScreenWrapper>
        <Canvas shadows orthographic>
          <Portfolio />
        </Canvas>
      </FullScreenWrapper>
    </NextUIProvider>
  );
};

export default Home;
