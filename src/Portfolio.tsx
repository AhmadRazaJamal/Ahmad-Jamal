import { Scroll, ScrollControls, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React from "react";
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

  model.scene.position.x = 0
  model.scene.position.y = -0.8
  model.scene.position.z = -0.5

  return (
    <React.Fragment>
      <ScrollControls pages={10} damping={0.1}>
        <Office model={model} scale={0.1} position={[0, 2.5, 0]} />
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
  const scroll = useScroll()
  useFrame((state, delta) => {
    // The offset is between 0 and 1, you can apply it to your models any way you like
    const offset = scroll.offset
    state.scene.position.set(0 - offset, 0, 0 - offset)
  })
  return <primitive object={props.model.scene} scale={props.scale} />
}

export default Portfolio;
