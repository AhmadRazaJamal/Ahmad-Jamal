import { useGLTF } from "@react-three/drei"
import * as THREE from "three";

export const useMultiplier = (screenSize: number) => {
    if (screenSize >= 768) {
        return 2
    } else {
        return 1.5
    }
}

export const positionCamera = (screenSize: number) => {
    if (screenSize >= 768) {
        return 0
    } else {
        return 12.4
    }
}

export const changeProgressBarHeight = (
    progressBarId: string,
    scrollOffset: number,
    activationStart: number,
    isActive: boolean,
    heightMultiplier: number = 2000,
    color: string,
): void => {
    const progressBar = document.getElementById(progressBarId) as HTMLElement | null;

    if (!progressBar) return;

    progressBar.style.backgroundColor = color;
    if (isActive) {
        const heightIncrement = Math.max(0, (scrollOffset - activationStart) * heightMultiplier);
        progressBar.style.height = `${Math.max(1, heightIncrement)}vh`;
    } else {
        progressBar.style.height = "0vh";
    }
};

export const loadModelWithTextures = (modelPath: string, texturePath: string) => {
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

export const animateSectionBorders = (
    id: string, 
    scrollOffset: number, 
    initialTopRadius: number, 
    finalTopRadius: number, 
    initialBottomRadius: number, 
    finalBottomRadius: number,
    topStart: number,    // Scroll offset to start animating the top radius
    topEnd: number,      // Scroll offset to end animating the top radius
    bottomStart: number, // Scroll offset to start animating the bottom radius
    bottomEnd: number    // Scroll offset to end animating the bottom radius
) => {
    const section = document.getElementById(id) as HTMLElement;
    if (!section) return;

    const lerp = (start: number, end: number, t: number): number => (1 - t) * start + t * end;
    const easeOutCubic = (t: number): number => --t * t * t + 1;

    // Normalize scrollOffset for top border radius animation
    if (scrollOffset >= topStart && scrollOffset <= topEnd) {
        const normalizedTopProgress = (scrollOffset - topStart) / (topEnd - topStart);
        const progressTop = easeOutCubic(normalizedTopProgress);
        const newTopRadius = lerp(initialTopRadius, finalTopRadius, progressTop);
        section.style.borderTopLeftRadius = `${newTopRadius}px`;
    } else if (scrollOffset < topStart) {
        section.style.borderTopLeftRadius = `${initialTopRadius}px`;
    } else {
        section.style.borderTopLeftRadius = `${finalTopRadius}px`;
    }

    // Normalize scrollOffset for bottom border radius animation
    if (scrollOffset >= bottomStart && scrollOffset <= bottomEnd) {
        const normalizedBottomProgress = (scrollOffset - bottomStart) / (bottomEnd - bottomStart);
        const progressBottom = easeOutCubic(normalizedBottomProgress);
        const newBottomRadius = lerp(initialBottomRadius, finalBottomRadius, progressBottom);
        section.style.borderBottomLeftRadius = `${newBottomRadius}px`;
    } else if (scrollOffset < bottomStart) {
        section.style.borderBottomLeftRadius = `${initialBottomRadius}px`;
    } else {
        section.style.borderBottomLeftRadius = `${finalBottomRadius}px`;
    }
}

