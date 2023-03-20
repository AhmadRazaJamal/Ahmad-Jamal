import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Portfolio from "./Portfolio";
import React from "react";
const root = ReactDOM.createRoot(document.querySelector("#root") as any);

root.render(
  <Canvas
    shadows
    orthographic
    camera={{
      left: -1,
      top: -1,
      bottom: 1,
      right: 1,
      zoom: window.innerWidth * 0.3,
      position: [-2, 1, 2],
    }}
  >
    <Portfolio />
  </Canvas>
);
