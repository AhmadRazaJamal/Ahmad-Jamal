import { Html, OrbitControls, Scroll, ScrollControls, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";
import Intro from "./Intro";
import Sections from "./Sections";
import { positionCamera, useMultiplier } from "./utils";
import CircularProgress from '@mui/material/CircularProgress';

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
        {/* <OrbitControls /> */}
        <Office model={model} scale={0.14} />
        <Scroll html>
          {/* DOM contents in here will scroll along */}
          {/* <Intro /> */}
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
  // const markedRef: any = useRef(null);
  const [screenVisible, setScreenVisible] = useState(true);
  const [clicked, setClick] = useState(false);
  const vec3 = new THREE.Vector3();

  // Get elements
  const sideBar1: any = document.getElementById('side-bar-01')
  const sideBar2: any = document.getElementById('side-bar-02')
  const progressBarLeft: any = document.getElementsByClassName('progress-bar-wrapper-left')[0];
  const progressBarRight: any = document.getElementsByClassName('progress-bar-wrapper-right')[0];
  const screenContainer: any = document.getElementsByClassName('htmlScreen')

  const { camera } = useThree();
  camera.zoom = window.innerWidth / 8 * useMultiplier(window.innerWidth);

  useFrame((state, delta) => {
    meshRef.current.position.x = (Math.sin(scroll.offset * 6.4))
    meshRef.current.position.z = (Math.sin(scroll.offset * 6.4))

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

    screenContainer[0].style.top = `${951 + positionCamera(window.innerWidth)}vh`

    if (scroll.offset > 0.95) {
      camera.position.lerp(vec3.set(-3.8, 1.7, 3.2), 0.06)
      const zoomTarget = 500 * useMultiplier(window.innerWidth);
      const zoomSpeed = 0.05;
      camera.zoom = THREE.MathUtils.lerp(camera.zoom, zoomTarget, zoomSpeed);
      camera.updateProjectionMatrix();
      // console.log(scroll.offset)

      if (scroll.offset > 0.9999) {
        // setScreenVisible(false);
        screenContainer[0].style.opacity = 1;
        screenContainer[0].style.display = 'block';


      } else {
        screenContainer[0].classList.add('fade-out');
        screenContainer[0].style.opacity = 0;
        setTimeout(() => {
          screenContainer[0].style.display = 'none';
        }, 500);
      }
    } else if (scroll.offset < 0.9999) {
      screenContainer[0].style.display = 'none';

      camera.position.lerp(vec3.set(-2, 1, 2), 0.01)
      const zoomTarget = window.innerWidth * 0.2;
      const zoomSpeed = 0.06;
      camera.zoom = THREE.MathUtils.lerp(camera.zoom, zoomTarget, zoomSpeed);
      camera.updateProjectionMatrix();
    }
  })

  return (
    <group ref={meshRef} onClick={() => setClick(!clicked)}>
      <primitive object={props.model.scene} scale={props.scale} position={[-0.5, -0.5, 0]}>
        <Html transform position={[0.8, 1.04, -3.1]} rotation-x={-0.1} wrapperClass='htmlScreen' ref={iframeRef} distanceFactor={1.25}>
          <CircularProgress sx={{ color: 'red' }} size={100} />
          <iframe src="https://bruno-simon.com/html/" />
        </Html>
      </primitive>
    </group>
  )

}

export default Portfolio;

