import { Scroll, ScrollControls, useGLTF, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, { useState } from "react";
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
      <ScrollControls pages={3}>
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
  const scroll = useScroll();
  const [endAnimation, setEndAnimation] = useState(false);
  const [movedRight, setMovedRight] = useState(false);

  useFrame((state, delta) => {
    if (!endAnimation) {
      // The offset is between 0 and 1, you can apply it to your models any way you like
      const offset = scroll.offset

      if (state.scene.position.x < 1 && !movedRight) {
        state.scene.position.x += offset;
        state.scene.position.z += offset;
      } else {
        setMovedRight(true)
        if (state.scene.position.x > -1) {
          state.scene.position.x -= offset;
          state.scene.position.z -= offset;
        } else {
          setEndAnimation(true)
        }
      }
    }
  })
  return <primitive object={props.model.scene} scale={props.scale} />
}

export default Portfolio;

