import { Html, Scroll, ScrollControls, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";
import Intro from "./Intro";
import Sections from "./Sections";

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
          <Intro />
          <Sections />
        </Scroll>
      </ScrollControls>
      <directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />
    </React.Fragment>
  )
};

function Office(props: any) {
  // Set states
  const scroll: any = useScroll();
  const meshRef: any = useRef(null);
  const iframeRef: any = useRef(null);
  const [screenVisible, setScreenVisible] = useState(true)

  // Get elements
  const sideBar1: any = document.getElementById('side-bar-01')
  const sideBar2: any = document.getElementById('side-bar-02')
  const progressBarLeft: any = document.getElementsByClassName('progress-bar-wrapper-left')[0];
  const progressBarRight: any = document.getElementsByClassName('progress-bar-wrapper-right')[0];
  const screenContainer: any = document.getElementsByClassName('htmlScreen')

  const { camera } = useThree();

  useFrame((state, delta) => {
    camera.zoom = scroll.offset * 1000;
    camera.updateProjectionMatrix();

    meshRef.current.position.x = (Math.sin(scroll.offset * 6.4))
    meshRef.current.position.z = (Math.sin(scroll.offset * 6.4))

    screenContainer[0].style.transform = `translateY(${(scroll.offset) * 950}vh)`;

    sideBar1.style.borderTopRightRadius = `${100 - (scroll.offset * 400)}vw`
    sideBar2.style.borderTopLeftRadius = `${100 - (scroll.offset * 140)}vw`

    sideBar1.style.borderBottomRightRadius = `${0 + Math.pow(scroll.offset * 5, 4)}vw`
    sideBar2.style.borderBottomLeftRadius = `${0 + Math.pow(scroll.offset * 2.8, 4)}vw`

    if (scroll.offset > 0.22 && scroll.offset < 0.5) {
      progressBarLeft.style.height = `${1 - (0.22 - scroll.offset) * 1000}vh`;
    } else if (scroll.offset < 0.22) {
      progressBarLeft.style.height = `${0}vh`;
    }

    if (scroll.offset > 0.51 && scroll.offset < 0.9) {
      progressBarRight.style.height = `${1 - (0.51 - scroll.offset) * 800}vh`;
    } else if (scroll.offset < 0.51) {
      progressBarRight.style.height = `${0}vh`;
    }

    if (scroll.offset > 0.98 && screenVisible) {
      setScreenVisible(false);
      screenContainer[0].style.display = 'block';
    }
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

