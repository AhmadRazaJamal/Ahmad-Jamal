import { Html, Scroll, ScrollControls, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";
import Section from "./Section";

const Portfolio = () => {
  const model = useGLTF("./office.glb");

  // Texture
  const textureLoader = new THREE.TextureLoader();
  const bakedTexture = textureLoader.load("baked-office-textures.png");

  // Material
  const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });
  bakedTexture.flipY = false;
  bakedTexture.encoding = THREE.sRGBEncoding;

  bakedTexture.wrapS = THREE.ClampToEdgeWrapping;
  bakedTexture.wrapT = THREE.ClampToEdgeWrapping;

  // Assign material to model
  model.scene.traverse((child: any) => {
    child.material = bakedMaterial;
  });

  return (
    <React.Fragment>
      <ScrollControls pages={10}>
        <Office model={model} scale={0.14} />
        <Scroll html>
          {/* DOM contents in here will scroll along */}
          <Section />
        </Scroll>
      </ScrollControls>
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
    </React.Fragment>
  )
};

function Office(props: any) {
  const scroll: any = useScroll();
  const meshRef: any = useRef(null);
  const iframeRef: any = useRef(null);

  const { camera } = useThree();

  useFrame((state, delta) => {

    camera.zoom = scroll.offset * 1000;
    camera.updateProjectionMatrix();

    meshRef.current.position.x = (Math.sin(scroll.offset * 6.4))
    meshRef.current.position.z = (Math.sin(scroll.offset * 6.4))
  })

  return (
    <group ref={meshRef}>
      <primitive object={props.model.scene} scale={props.scale} position={[0, -0.5, 0]}>
        <Html transform position={[0.8, -0.29, -3.1]} rotation-x={-0.1} wrapperClass='htmlScreen' ref={iframeRef} distanceFactor={1.25}>
          <iframe src="https://bruno-simon.com/html/" />
        </Html>
      </primitive>
    </group>
  )

}

export default Portfolio;

