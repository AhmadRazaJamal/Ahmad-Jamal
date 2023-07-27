import { Html, OrbitControls, Scroll, ScrollControls, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";
import Intro from "./Intro";
import { Sections } from "./Sections";
import { positionCamera, useMultiplier } from "./utils";
import CircularProgress from '@mui/material/CircularProgress';
import { Switch } from "./Switch";

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
  const scroll: any = useScroll();
  const meshRef: any = useRef(null);
  const iframeRef: any = useRef(null);
  const frameRef: any = useRef(null);
  const loadingRef: any = useRef(null);
  // const markedRef: any = useRef(null);
  const [screenVisible, setScreenVisible] = useState(true);
  const [clicked, setClick] = useState(false);
  let spinnerShown = false;

  const vec3 = new THREE.Vector3();

  // Get elements
  const sideBar1: any = document.getElementById('side-bar-01')
  const sideBar2: any = document.getElementById('side-bar-02')
  const progressBarLeft: any = document.getElementsByClassName('progress-bar-wrapper-left')[0];
  const progressBarRight: any = document.getElementsByClassName('progress-bar-wrapper-right')[0];
  const screenContainer: any = document.getElementsByClassName('htmlScreen')

  const { camera } = useThree();
  useFrame((state, delta) => {
    if (!props.isInteractiveMode) {
      screenContainer[0].style.top = `${951 + positionCamera(window.innerWidth)}vh`
      meshRef.current.position.x = (Math.sin(scroll.offset * 16.4) * 0.6)
      meshRef.current.position.z = (Math.sin(scroll.offset * 16.4) * 0.6)

      sideBar1.style.borderTopRightRadius = `${100 - (scroll.offset * 1400)}vw`

      sideBar1.style.borderBottomRightRadius = `${0 + Math.pow(scroll.offset * 12, 4)}vw`
      sideBar2.style.borderBottomLeftRadius = `${0 + Math.pow(scroll.offset * 2.8, 4)}vw`

      if (scroll.offset > 0.035 && scroll.offset < 0.18) {
        progressBarLeft.style.height = `${1 - (0.035 - scroll.offset) * 2500}vh`;
      }

      if (scroll.offset > 0.18 && scroll.offset < 0.33) {
        sideBar2.style.borderTopLeftRadius = `${100 - (scroll.offset * 350)}vw`
      }

      if (scroll.offset > 0.21 && scroll.offset < 0.33) {
        progressBarRight.style.height = `${1 - (0.21 - scroll.offset) * 800}vh`;
      }
      else if (scroll.offset < 0.51) {
        progressBarRight.style.height = `${0}vh`;
      }

      if (scroll.offset > 0.95) {
        camera.position.lerp(vec3.set(-3.8, 1.7, 3.2), 0.06)
        const zoomTarget = 500 * useMultiplier(window.innerWidth);
        const zoomSpeed = 0.04;
        camera.zoom = THREE.MathUtils.lerp(camera.zoom, zoomTarget, zoomSpeed);
        camera.updateProjectionMatrix();

        if (scroll.offset > 0.9995) {
          if (!spinnerShown) {
            loadingRef.current.style.display = 'block';
            spinnerShown = true;
          }

          setTimeout(() => {
            loadingRef.current.style.display = 'none';
            frameRef.current.style.opacity = 1;
            frameRef.current.style.display = 'block';
          }, 2000);


        } else {
          spinnerShown = false;
          frameRef.current.classList.add('fade-out');
          frameRef.current.style.opacity = 0;
          frameRef.current.style.display = 'none';
        }
      } else if (scroll.offset < 0.9995) {
        frameRef.current.style.display = 'none';
        spinnerShown = false;

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

  return (
    <group ref={meshRef}>
      <primitive object={props.model.scene} scale={props.scale} position={[-0.3, -0.3, 0]}>
        <Html transform position={[0.8, 1.04, -3.1]} rotation-x={-0.1} wrapperClass='htmlScreen' ref={iframeRef} distanceFactor={1.25}>
          <CircularProgress sx={{ color: 'red', display: 'none' }} size={100} ref={loadingRef} />
          <iframe src="https://bruno-simon.com/html/" className="iframeScreen" ref={frameRef} />
        </Html>
      </primitive>
    </group>
  )

}

export default Portfolio;

