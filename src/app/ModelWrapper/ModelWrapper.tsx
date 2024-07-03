import React, { useLayoutEffect, useRef, useState, useCallback } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import { Html, OrbitControls, Scroll, ScrollControls, useScroll } from '@react-three/drei';
import * as THREE from 'three';
import { isSmallScreen, isMobileScreen, isMobileDevice } from '../utils/constants';
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

  const handleCameraTransition = useCallback(() => {
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
  }, [camera, originalZoom]);

  useFrame(() => {
    if (transitionCamera && bakedMaterial) {
      handleCameraTransition();
    }
  });

  if (!bakedMaterial) {
    return (
      <Html style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
        <LoadingCube />
      </Html>
    );
  }

  const renderContent = (
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
      <ScrollControls pages={30}>{renderContent}</ScrollControls>
      {interactiveMode && <OrbitControls />}
      <directionalLight position={[1, 2, 3]} intensity={3} />
    </>
  );
};

const ScrollingSurfaces: React.FC = () => (
  <>
    <ScrollingSurface start={0} color="#4682B4" yPosition={-1} />
    <ScrollingSurface start={0.25} color="#FDD835" yPosition={-0.98} />
    <ScrollingSurface start={0.65} color="#12664F" yPosition={-0.96} />
  </>
);

const Office: React.FC<OfficeProps> = ({ model, scale, isInteractiveMode }) => {
  const { camera } = useThree();
  const groupRef = useRef<THREE.Group>(null);
  const scroll = useScroll();

  useFrame(() => {
    if (!isInteractiveMode && groupRef.current && scroll) {
      if (scroll.offset <= 0.0675 && !isSmallScreen) {
        const xPosition = scroll.offset * -11.2;
        groupRef.current.position.x = xPosition;
        groupRef.current.position.z = xPosition;
        camera.updateProjectionMatrix();
      }

      if (scroll.offset >= 0.001 && scroll.offset <= 0.015) {
        const scrollIcon = document.getElementById('scroll-icon');
        if (scrollIcon) {
          scrollIcon.style.opacity = `${1 - scroll.offset * 250}`;
        }
      }

      if (isMobileScreen) {
        animateSectionBorders('section-one', scroll.offset, 200, 0, 0, 200, 0.09, 0.14, 0.17, 0.21);
        animateSectionBorders('section-two', scroll.offset, 200, 0, 0, 200, 0.34, 0.4, 0.54, 0.57);
        animateSectionBorders('section-three', scroll.offset, 200, 0, 0, 200, 0.68, 0.72, 0.785, 0.825);
      } 
      else {
        animateSectionBorders('section-one', scroll.offset, 200, 0, 0, 200, 0.1, 0.14, 0.152, 0.18);
        animateSectionBorders('section-two', scroll.offset, 200, 0, 0, 200, 0.34, 0.38, 0.525, 0.57);
        animateSectionBorders('section-three', scroll.offset, 200, 0, 0, 200, 0.73, 0.77, 0.81, 0.855);
      }

      if (isMobileDevice() || isMobileScreen) {
        changeProgressBarHeight('progress-bar-one', scroll.offset, 0.135, scroll.offset > 0.135 && scroll.offset < 0.24, 4900, 'rgb(70, 130, 180, 0.5)');
        changeProgressBarHeight('progress-bar-two', scroll.offset, 0.406, scroll.offset > 0.406 && scroll.offset < 0.7, 3360, 'rgb(253, 216, 53, 0.5)');
        changeProgressBarHeight('progress-bar-three', scroll.offset, 0.794, scroll.offset > 0.794 && scroll.offset < 0.95, 4000, 'rgb(57, 150, 122, 0.8)');
      } else {
        changeProgressBarHeight('progress-bar-one', scroll.offset, 0.124, scroll.offset > 0.124 && scroll.offset < 0.24, 6700, 'rgb(70, 130, 180, 0.5)');
        changeProgressBarHeight('progress-bar-two', scroll.offset, 0.358, scroll.offset > 0.358 && scroll.offset < 0.6, 3410, 'rgb(253, 216, 53, 0.5)');
        changeProgressBarHeight('progress-bar-three', scroll.offset, 0.758, scroll.offset > 0.758 && scroll.offset < 0.85, 4700, 'rgb(57, 150, 122, 0.8)');
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
