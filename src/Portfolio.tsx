import { Html, OrbitControls, Scroll, ScrollControls, ScrollControlsState, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";
import Intro from "./Intro";
import { Sections } from "./Sections";
import { positionCamera, useMultiplier } from "./utils";
import CircularProgress from '@mui/material/CircularProgress';
import { Switch } from "./Switch";
import { changeProgressBarHeight } from "./helpers";
import { Form } from "./Form/Form";

const Portfolio = () => {
  const model = useGLTF("./office.glb");
  const [interactiveMode, setInteractiveMode] = useState(false);

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
      <ScrollControls pages={30}>
        {interactiveMode && <OrbitControls />}
        <Office model={model} scale={0.08} isInteractiveMode={interactiveMode} />
        <Scroll html>
          {/* DOM contents in here will scroll along */}
          <div className="switch-container">
            <Switch aria-label="interactive-mode-switch" setInteractive={setInteractiveMode} isOn={interactiveMode} />
          </div>
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
  const scroll: ScrollControlsState = useScroll();
  const meshRef: any = useRef(null);
  const iframeRef: any = useRef(null);
  const frameRef: any = useRef(null);
  // const markedRef: any = useRef(null);
  const [screenVisible, setScreenVisible] = useState(true);
  const [clicked, setClick] = useState(false);

  const vec3 = new THREE.Vector3();

  // Get elements
  const sideBar1: any = document.getElementById('side-bar-01')
  const sideBar2: any = document.getElementById('side-bar-02')
  const screenContainer: any = document.getElementsByClassName('htmlScreen')
  const formContainer: any = document.getElementsByClassName('form')

  const { camera } = useThree();
  useFrame((state, delta) => {
    if (!props.isInteractiveMode) {
      screenContainer[0].style.top = `${3000 + positionCamera(window.innerWidth)}vh`
      formContainer[0].style.top = `${3000 + positionCamera(window.innerWidth)}vh`

      sideBar1.style.borderTopRightRadius = `${100 - (scroll.offset * 1400)}vw`

      sideBar1.style.borderBottomRightRadius = `${0 + Math.pow(scroll.offset * 12, 4)}vw`
      sideBar2.style.borderBottomLeftRadius = `${0 + Math.pow(scroll.offset * 2.8, 4)}vw`

      const sectionOneProgressBarRange = scroll.offset > 0.09 && scroll.offset < 0.2;
      changeProgressBarHeight('section-one-progress-bar', scroll.offset, 0.09, 3000, sectionOneProgressBarRange)

      if (scroll.offset > 0.18 && scroll.offset < 0.33) {
        sideBar2.style.borderTopLeftRadius = `${100 - (scroll.offset * 350)}vw`
      }

      const sectionTwoProgressBarRange = scroll.offset > 0.24 && scroll.offset < 0.42;
      changeProgressBarHeight('section-two-progress-bar', scroll.offset, 0.25, 3000, sectionTwoProgressBarRange)

      if (scroll.offset > 0.95) {
        camera.position.lerp(vec3.set(-4.1, 1.9, 3.2), 0.06)
        const zoomTarget = 500 * useMultiplier(window.innerWidth);
        const zoomSpeed = 0.04;
        camera.zoom = THREE.MathUtils.lerp(camera.zoom, zoomTarget, zoomSpeed);
        camera.updateProjectionMatrix();

        if (scroll.offset > 0.99999) {
          frameRef.current.style.opacity = 0.85;
          frameRef.current.style.display = 'block';
        } else {
          frameRef.current.style.display = 'none';
        }
      } else if (scroll.offset < 0.99999) {
        frameRef.current.style.display = 'none';

        camera.position.lerp(vec3.set(-2, 1, 2), 0.01)

        let zoomTarget;
        if (window.innerWidth < 757) {
          zoomTarget = window.innerWidth * 0.5;
        } else {
          zoomTarget = window.innerWidth * 0.3;
        }
        const zoomSpeed = 0.04;
        camera.zoom = THREE.MathUtils.lerp(camera.zoom, zoomTarget, zoomSpeed);
        camera.updateProjectionMatrix();
      }
    }
  })
  // [0.3, 8.5, 3.8]
  return (
    <group ref={meshRef}>
      <primitive object={props.model.scene} scale={props.scale} position={[-1.3, -0.2, 0]}>
        <Html transform position={[0.8, 3.64, -3.1]} rotation-x={-0.1} wrapperClass='htmlScreen' ref={iframeRef} distanceFactor={1.25}>
          {<img
            src={'https://media4.giphy.com/media/bcKmIWkUMCjVm/giphy.gif?cid=ecf05e47ttf63o75aoryn5f642znotplu7lvwnb4739g2mpa&ep=v1_gifs_search&rid=giphy.gif&ct=g'}
            style={{ objectFit: 'cover', width: '1026px', height: '586px', objectPosition: 'bottom' }}
            alt="dog waving gif by GIFHY"
            ref={frameRef}
          />}
        </Html>
        <Html transform position={[-1, 9.5, 3.8]} rotation-x={0} rotation-y={-0.8} wrapperClass='form' ref={iframeRef} distanceFactor={3}>
          {
            <Form />
          }
        </Html>
      </primitive>
    </group>
  )

}

export default Portfolio;

