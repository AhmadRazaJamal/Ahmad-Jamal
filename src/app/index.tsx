import "./styles.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Portfolio from "./Portfolio";
import React from "react";
import LoadingScreen from "./Loading";
import { NextUIProvider } from "@nextui-org/react";

const root = ReactDOM.createRoot(document.querySelector("#root") as any);

root.render(
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
