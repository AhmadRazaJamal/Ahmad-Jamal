"use client";

import { useEffect } from "react";
import dynamic from "next/dynamic";
import { FullScreenWrapper } from "./LoadingCube/LoadingCube.styles";
import { NextUIProvider } from "@nextui-org/react";
import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const Home = () => {
  // Preload heavy GLB as early as possible on the client
  useEffect(() => {
    try {
      // Ensure the same absolute path used in the loader
      // This kicks off the fetch in parallel to hydration
      (useGLTF as any).preload("/office.glb");
    } catch {}
  }, []);

  const Portfolio = dynamic(() => import("./ModelWrapper/ModelWrapper"), {
    ssr: false,
    loading: () => null,
  });

  return (
    <NextUIProvider>
      <FullScreenWrapper>
        <Canvas
          orthographic
          dpr={[1, 1.5]}
          gl={{ antialias: false, powerPreference: "high-performance" }}
        >
          <Portfolio />
        </Canvas>
      </FullScreenWrapper>
    </NextUIProvider>
  );
};

export default Home;
