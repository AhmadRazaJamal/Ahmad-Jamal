import React, { useLayoutEffect, useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Scroll, ScrollControls, useScroll } from '@react-three/drei';
import * as THREE from 'three';

import { isSmallScreen } from '../utils/constants';
import { animateSectionBorders, changeProgressBarHeight, loadModelWithTextures } from '../utils/helpers';
import ScrollingSurface from '../ScrollingSurface/ScrollingSurface';
import ScrollUp from '../ScrollUp/ScrollUp';
import InteractiveButton from '../InteractiveButton/InteractiveButton';
import Sections from '../Sections/Sections';

interface IModel {
  scene: THREE.Group;
}

interface OfficeProps {
  model: IModel;
  scale: number;
  isInteractiveMode: boolean;
}

const Portfolio: React.FC = () => {
  const { camera } = useThree();
  const [interactiveMode, setInteractiveMode] = useState<boolean>(false);
  const [transitionCamera, setTransitionCamera] = useState<boolean>(false);
  const model = loadModelWithTextures('office.glb', 'baked-office-textures.png') as IModel;
  const originalZoom = isSmallScreen ? window.innerWidth * 0.4 : window.innerWidth * 0.23;

  useLayoutEffect(() => {
    setTransitionCamera(!interactiveMode);
  }, [interactiveMode]);

  useFrame(() => {
    if (transitionCamera) {
      handleCameraTransition(camera as THREE.PerspectiveCamera, originalZoom, setTransitionCamera);
    }
  });

  return (
    <React.Fragment>
      <ScrollControls pages={34}>
        {interactiveMode && <OrbitControls />}
        <ScrollingSurfaces />
        <Office model={model} scale={0.08} isInteractiveMode={interactiveMode} />
        <Scroll html>
          <InteractiveButton aria-label="interactive-mode-switch" setInteractive={setInteractiveMode} isOn={interactiveMode} />
          <ScrollUp />
          <Sections />
        </Scroll>
      </ScrollControls>
      <directionalLight castShadow position={[1, 2, 3]} intensity={3} />
      <ambientLight intensity={0.5} />
    </React.Fragment>
  );
};

const handleCameraTransition = (camera: THREE.PerspectiveCamera, originalZoom: number, setTransitionCamera: React.Dispatch<React.SetStateAction<boolean>>): void => {
  const targetPosition = new THREE.Vector3(-2, 1, 2);
  camera.position.lerp(targetPosition, 0.05);
  camera.zoom = THREE.MathUtils.lerp(camera.zoom, originalZoom, 0.05);

  if (camera.position.distanceTo(targetPosition) < 0.1) {
    camera.position.set(targetPosition.x, targetPosition.y, targetPosition.z);
    camera.zoom = originalZoom;
    setTransitionCamera(false);
  }

  camera.lookAt(0, 0, 0);
  camera.updateProjectionMatrix();
};

const ScrollingSurfaces: React.FC = () => (
  <>
    <ScrollingSurface start={0} color="#FDD835" yPosition={isSmallScreen ? -0.8 : -1} />
    <ScrollingSurface start={0.25} color="#4682B4" yPosition={-0.79} />
    <ScrollingSurface start={0.7} color="#FDD835" yPosition={-0.78} />
  </>
);

const Office: React.FC<OfficeProps> = ({ model, scale, isInteractiveMode }) => {
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const scroll = useScroll();

  const scrollIcon = document.getElementById('scroll-icon');

  useFrame(() => {
    if (!isInteractiveMode && groupRef.current && scroll.offset <= 0.0675) {
      const xPosition = scroll.offset * -12;
      groupRef.current.position.x = xPosition;
      groupRef.current.position.z = xPosition;
      camera.updateProjectionMatrix();
    }

    if (scroll.offset >= 0.001 && scroll.offset <= 0.015 && scrollIcon) {
      scrollIcon.style.opacity = `${1 - scroll.offset * 250}`;
    }

    console.log(scroll.offset)
    animateSectionBorders(
      'section-one', 
      scroll.offset, 
      300, 0,
      0, 250, 
      0.092, 0.15,
      0.15, 0.2
  );

  animateSectionBorders(
    'section-two', 
    scroll.offset, 
    300, 0,
    0, 250, 
    0.25, 0.3,
    0.37, 0.39
);

    const sectionOneProgressBarRange = scroll.offset > 0.11 && scroll.offset < 0.2;
    changeProgressBarHeight('progress-bar-one', scroll.offset, 0.11, sectionOneProgressBarRange);
  });

  return (
    <group ref={groupRef}>
      <primitive object={model.scene} scale={[scale, scale, scale]} position={[-0.28, -0.3, 0]} />
    </group>
  );
};

export default Portfolio;
