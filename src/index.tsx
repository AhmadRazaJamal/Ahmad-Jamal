import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Portfolio from "./Portfolio";
import React from "react";
import { PerspectiveCamera } from "three";

const root = ReactDOM.createRoot(document.querySelector("#root") as any);

root.render(
  <Canvas
    shadows
    orthographic
    camera={{
      left: -2,
      top: -2,
      bottom: 2,
      right: 2,
      zoom: window.innerWidth * 0.2,
      position: [-2, 2, 2],
    }}
  >
    <Portfolio />
  </Canvas>
);
