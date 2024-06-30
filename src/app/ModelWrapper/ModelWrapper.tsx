import React, { useLayoutEffect, useRef, useState } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, Scroll, ScrollControls, useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { isSmallScreen, isMobileScreen, isSafariBrowser, isMobileDevice } from '../utils/constants';
import { animateSectionBorders, changeProgressBarHeight, loadModelWithTextures } from '../utils/helpers';
import ScrollingSurface from '../ScrollingSurface/ScrollingSurface';
import ScrollUp from '../ScrollUp/ScrollUp';
import InteractiveButton from '../InteractiveButton/InteractiveButton';
import Sections from '../Sections/Sections';
import LoadingCube from '../Loading/Loading';

interface IModel {
  scene: THREE.Group;
}

interface OfficeProps {
  model: IModel;
  scale: number;
  isInteractiveMode: boolean;
}

const ModelWrapper: React.FC = () => {
  const { camera } = useThree();
  const [interactiveMode, setInteractiveMode] = useState<boolean>(false);
  const [transitionCamera, setTransitionCamera] = useState<boolean>(false);
  const { scene, bakedMaterial } = loadModelWithTextures('office.glb', 'baked-office-textures.png');
  const originalZoom = isSmallScreen ? window.innerWidth * 0.55 : window.innerWidth * 0.25;

  useLayoutEffect(() => {
    setTransitionCamera(!interactiveMode);
  }, [interactiveMode]);

  useFrame(() => {
    if (transitionCamera && bakedMaterial) {
      handleCameraTransition(camera as THREE.PerspectiveCamera, originalZoom, setTransitionCamera);
    }
  });

  if (!bakedMaterial) {
    return <Html style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}>
      <LoadingCube />
    </Html>;
  }

  const renderContent = () => (
    <>
      <ScrollingSurfaces />
      <Office model={{ scene }} scale={0.08} isInteractiveMode={interactiveMode} />
      <Scroll html>
        <InteractiveButton aria-label="interactive-mode-switch" setInteractive={setInteractiveMode} isOn={interactiveMode} />
        <ScrollUp />
        <Sections />
      </Scroll>
    </>
  );

  return (
    <>
      {interactiveMode ? (
        <>
          <OrbitControls />
          <ScrollControls pages={30}>{renderContent()}</ScrollControls>
        </>
      ) : (
        <ScrollControls pages={30}>{renderContent()}</ScrollControls>
      )}
      <directionalLight position={[1, 2, 3]} intensity={3} />
    </>
  );
};

const handleCameraTransition = (
  camera: THREE.PerspectiveCamera,
  originalZoom: number,
  setTransitionCamera: React.Dispatch<React.SetStateAction<boolean>>
): void => {
  const targetPosition = new THREE.Vector3(-2, 1, 2);

  const updateCameraPosition = () => {
    camera.position.lerp(targetPosition, 0.001);
    camera.zoom = THREE.MathUtils.lerp(camera.zoom, originalZoom, 0.001);

    if (camera.position.distanceTo(targetPosition) < 0.01 && Math.abs(camera.zoom - originalZoom) < 0.01) {
      camera.position.copy(targetPosition);
      camera.zoom = originalZoom;
      setTransitionCamera(false);
    } else {
      requestAnimationFrame(updateCameraPosition);
    }

    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();
  };

  requestAnimationFrame(updateCameraPosition);
};

const ScrollingSurfaces: React.FC = () => (
  <>
    <ScrollingSurface start={0} color="#4682B4" yPosition={-1} />
    <ScrollingSurface start={0.25} color="#FDD835" yPosition={-0.98} />
    <ScrollingSurface start={0.6} color="#12664F" yPosition={-0.96} />
  </>
);

const Office: React.FC<OfficeProps> = ({ model, scale, isInteractiveMode }) => {
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const scroll = useScroll();

  const scrollIcon = document.getElementById('scroll-icon');

  useFrame(() => {
    if (!isInteractiveMode && groupRef.current && scroll) {
      if (scroll.offset <= 0.0675 && !isSmallScreen) {
        const xPosition = scroll.offset * -11.2;
        groupRef.current.position.x = xPosition;
        groupRef.current.position.z = xPosition;
        camera.updateProjectionMatrix();
      }

      if (scroll.offset >= 0.001 && scroll.offset <= 0.015 && scrollIcon) {
        scrollIcon.style.opacity = `${1 - scroll.offset * 250}`;
      }

      if (isMobileDevice()) {
        animateSectionBorders('section-one', scroll.offset, 300, 0, 0, 300, 0.1, 0.14, 0.172, 0.22);
        animateSectionBorders('section-two', scroll.offset, 300, 0, 0, 300, 0.33, 0.37, 0.55, 0.6);
        animateSectionBorders('section-three', scroll.offset, 300, 0, 0, 300, 0.695, 0.735, 0.808, 0.84);
      } else {
        animateSectionBorders('section-one', scroll.offset, 300, 0, 0, 300, 0.1, 0.14, 0.17, 0.21);
        animateSectionBorders('section-two', scroll.offset, 300, 0, 0, 300, 0.335, 0.375, 0.555, 0.595);
        animateSectionBorders('section-three', scroll.offset, 300, 0, 0, 300, 0.695, 0.73, 0.815, 0.85);
      }

      if (isMobileDevice()) {
        changeProgressBarHeight('progress-bar-one', scroll.offset, 0.13, scroll.offset > 0.13 && scroll.offset < 0.24, 4400, 'rgb(70, 130, 180, 0.5)');
        changeProgressBarHeight('progress-bar-two', scroll.offset, 0.358, scroll.offset > 0.358 && scroll.offset < 0.6, 3410, 'rgb(253, 216, 53, 0.5)');
        changeProgressBarHeight('progress-bar-three', scroll.offset, 0.719, scroll.offset > 0.719 && scroll.offset < 0.85, 4300, 'rgb(57, 150, 122, 0.8)');
      } else {
        changeProgressBarHeight('progress-bar-one', scroll.offset, 0.124, scroll.offset > 0.124 && scroll.offset < 0.24, 5100, 'rgb(70, 130, 180, 0.5)');
        changeProgressBarHeight('progress-bar-two', scroll.offset, 0.358, scroll.offset > 0.358 && scroll.offset < 0.6, 3410, 'rgb(253, 216, 53, 0.5)');
        changeProgressBarHeight('progress-bar-three', scroll.offset, 0.719, scroll.offset > 0.719 && scroll.offset < 0.85, 4300, 'rgb(57, 150, 122, 0.8)');
      }
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={model.scene} scale={[scale, scale, scale]} position={[-0.3, -0.3, 0]} />
    </group>
  );
};

export default ModelWrapper;
