import { useGLTF } from "@react-three/drei"
import * as THREE from "three";

export const useMultiplier = (screenSize: number) => {
    if(screenSize >= 768){
        return 2
    } else { 
        return 1.5
    }
}

export const positionCamera = (screenSize: number) => {
    if(screenSize >= 768){
        return 0
    } else { 
        return 12.4
    }
}

export const changeProgressBarHeight = (
    className: string,
    offset: number,
    rangeStart: number,
    range: boolean
  ) => {
    const progressBar = document.querySelector(`.${className}`) as HTMLElement;
  
    if (progressBar && range) {
      const heightIncrement = (offset - rangeStart) * 2000;
      progressBar.style.height = `${1 + heightIncrement}rem`;
    } else if (progressBar) {
      progressBar.style.height = "0rem";
    }
  };

export const loadModelWithTextures = (modelPath: string, texturePath: string ) => {
    const model = useGLTF(modelPath);
  
    // Loads the textures
    const textureLoader = new THREE.TextureLoader();
    const bakedTexture = textureLoader.load(texturePath);
  
    // Loads the baked material to apply onto the model
    const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture });
    bakedTexture.flipY = false;
    bakedTexture.encoding = THREE.sRGBEncoding;
  
    bakedTexture.wrapS = THREE.ClampToEdgeWrapping;
    bakedTexture.wrapT = THREE.ClampToEdgeWrapping;
  
    // Apply material to model
    model.scene.traverse((child: any) => {
      child.material = bakedMaterial;
    });

    return model;
}