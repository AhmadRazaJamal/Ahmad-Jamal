"use client"

import { OrbitControls, Scroll, ScrollControls, ScrollControlsState, useGLTF, useScroll } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Sections } from "./Sections/Sections";
import { changeProgressBarHeight } from "./utils/helpers";
import ScrollingSurface from "./ScrollingSurface/ScrollingSurface";
import ScrollUp from "./ScrollUp/ScrollUp";
import Switch from "./Switch/Switch";

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
      <ScrollControls pages={34}>
        {interactiveMode && <OrbitControls />}
        <ScrollingSurface start={0} color="#FDD835" yPosition={-0.8} />
        <ScrollingSurface start={0.3} color="#4682B4" yPosition={-0.79} />
        <ScrollingSurface start={0.7} color="#FDD835" yPosition={-0.78} />
        <Office model={model} scale={0.08} isInteractiveMode={interactiveMode} />
        <Scroll html>
          {/* DOM contents in here will scroll along */}
            <Switch aria-label="interactive-mode-switch" setInteractive={setInteractiveMode} isOn={interactiveMode} />
          <ScrollUp />
          <Sections />
        </Scroll>
      </ScrollControls>
      <directionalLight castShadow position={[1, 2, 3]} intensity={3} />
      <ambientLight intensity={0.5} />
    </React.Fragment>
  )
};

function Office(props: any) {
  const scroll: ScrollControlsState = useScroll();
  const meshRef: any = useRef(null);
  const frameRef: any = useRef(null);

  const isMobile = window?.innerWidth <= 767;

  const vec3 = new THREE.Vector3();

  // Get elements and store them in a variable to animate
  const sectionOne: any = document.getElementById('section-one')
  const sectionTwo: any = document.getElementById('section-two')
  const sectionThree: any = document.getElementById('section-three')
  const sectionFour: any = document.getElementById('section-four')

  const { camera } = useThree();
  useFrame((state, delta) => {
    if (!props.isInteractiveMode && sectionOne && sectionTwo) {
      // Moves the office model to the left when on Desktop
      if (scroll.offset <= 0.065 && !isMobile) {
        // meshRef.current.position.x = - scroll.offset * 10
        // meshRef.current.position.z = - scroll.offset * 10
      } else {
        camera.zoom = scroll.offset * 150 + 200;
      }

      // Define the target position, zoom, and look-at point
      const targetPosition = new THREE.Vector3(-2, 1, 2);
      const targetZoom = 700; // Adjust as needed
      const targetLookAt = new THREE.Vector3(-0.4, 0, 0);

      const lerpFactor = 1; // For smoother transition

      // Start transitioning slightly before 0.235 and end slightly after
      const startTransition = 0.235;
      const endTransition = 0.4;

      const currentLookAt = new THREE.Vector3(); // To store the interpolated look-at position

      if (scroll.offset >= startTransition && scroll.offset <= endTransition) {
        // Calculate a normalized factor based on scroll position within the transition range
        const normalizedFactor = (scroll.offset - startTransition) / (endTransition - startTransition);

        // Lerp camera position and zoom
        camera.position.lerp(targetPosition, lerpFactor * normalizedFactor);
        camera.zoom = THREE.MathUtils.lerp(camera.zoom, targetZoom, lerpFactor * normalizedFactor);

        // Interpolate the look-at position
        currentLookAt.lerp(targetLookAt, lerpFactor * normalizedFactor);
        camera.lookAt(currentLookAt);

        camera.updateProjectionMatrix();
      }

      // Zooming out logic (new)
      const startZoomOut = 0.4;
      const endZoomOut = 1; // Adjust this as needed
      const targetZoomOut = 200; // Adjust this as needed

      if (scroll.offset > startZoomOut && scroll.offset < endZoomOut) {
        // Calculate a normalized factor for the zoom out phase
        const normalizedFactor = (scroll.offset - startZoomOut) / (endZoomOut - startZoomOut);

        // Lerp camera zoom for zooming out
        camera.zoom = THREE.MathUtils.lerp(targetZoom, targetZoomOut, normalizedFactor);
        camera.updateProjectionMatrix();
      }


      // Controls border animation for section blocks
      sectionOne.style.borderTopLeftRadius = `${93 - (scroll.offset * 900)}rem`
      sectionOne.style.borderBottomLeftRadius = `${Math.pow(scroll.offset * 8, 8)}rem`

      sectionTwo.style.borderTopLeftRadius = `${315 - (scroll.offset * 900)}rem`
      sectionTwo.style.borderBottomLeftRadius = `${Math.pow(scroll.offset * 2.4, 25)}rem`

      sectionThree.style.borderTopLeftRadius = `${530 - (scroll.offset * 900)}rem`
      sectionThree.style.borderBottomLeftRadius = `${0 + Math.pow(scroll.offset * 1.61, 24)}rem`

      sectionFour.style.borderTopLeftRadius = `${680 - (scroll.offset * 900)}rem`
      sectionFour.style.borderBottomLeftRadius = `${0 + Math.pow(scroll.offset * 1.2, 64)}rem`

      const sectionOneProgressBarRange = scroll.offset > 0.102 && scroll.offset < 0.18;
      changeProgressBarHeight('progress-bar-one', scroll.offset, 0.102, sectionOneProgressBarRange)

      const sectionTwoProgressBarRange = scroll.offset > 0.346 && scroll.offset < 0.6;
      changeProgressBarHeight('progress-bar-two', scroll.offset, 0.346, sectionTwoProgressBarRange)

      const sectionThreeProgressBarRange = scroll.offset > 0.585 && scroll.offset < 0.7;
      changeProgressBarHeight('progress-bar-three', scroll.offset, 0.585, sectionThreeProgressBarRange)

      const sectionFourProgressBarRange = scroll.offset > 0.755 && scroll.offset < 0.87;
      changeProgressBarHeight('progress-bar-four', scroll.offset, 0.755, sectionFourProgressBarRange)

      if (scroll.offset < 0.99999 && frameRef.current) {
        // camera.position.lerp(vec3.set(-2, 1, 2), 0.01)

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
      <primitive object={props.model.scene} scale={props.scale} position={[-0.3, -0.4, 0]}>
      </primitive>
    </group>
  )

}

export default Portfolio;

