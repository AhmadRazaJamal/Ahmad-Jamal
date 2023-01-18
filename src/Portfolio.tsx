import { Scroll, ScrollControls, useGLTF, useScroll } from "@react-three/drei";
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
  let object = props.model.scene.getObjectByName("Monitor");
  const { camera } = useThree();

  useFrame((state, delta) => {

    camera.zoom = scroll.offset * 500;
    camera.updateProjectionMatrix();
    console.log(camera.zoom)

    state.scene.position.x = (Math.sin(scroll.offset * 6.2))
    state.scene.position.z = (Math.sin(scroll.offset * 6.2))
  })

  return <primitive object={props.model.scene} scale={props.scale} ref={meshRef} position={[0, -0.5, 0]} />
}

export default Portfolio;

