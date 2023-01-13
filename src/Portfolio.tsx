import { OrbitControls, Scroll, ScrollControls, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Perf } from "r3f-perf";
import React, { useRef } from "react";
import * as THREE from "three";

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

  model.scene.position.x = 2
  model.scene.position.y = -2
  model.scene.position.z = -1

  return (
    <React.Fragment>
      <ScrollControls pages={3} damping={0.1}>
        <Office model={model} scale={0.1} position={[0, 2.5, 0]} />
        <Scroll html>
          {/* DOM contents in here will scroll along */}
          <h1>html in here (optional)</h1>
          <h1 style={{ top: '100vh' }}>second page</h1>
          <h1 style={{ top: '200vh' }}>third page</h1>
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
    const offset = 1 - scroll.offset
    // state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
    // state.camera.lookAt(0, 0, 0)
  })
  return <primitive object={props.model.scene} scale={props.scale} />
}

export default Portfolio;
