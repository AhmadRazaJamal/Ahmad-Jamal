import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { useState, useEffect } from "react";

export const useMultiplier = (screenSize: number) => (screenSize >= 768 ? 2 : 1.5);
export const positionCamera = (screenSize: number) => (screenSize >= 768 ? 0 : 12.4);

export const changeProgressBarHeight = (
    progressBarId: string,
    scrollOffset: number,
    activationStart: number,
    isActive: boolean,
    heightMultiplier: number = 2000,
    color: string
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
    const { scene } = useGLTF(modelPath);
    const [bakedMaterial, setBakedMaterial] = useState<THREE.MeshBasicMaterial | null>(null);

    useEffect(() => {
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(texturePath, (texture) => {
            texture.flipY = false;
            texture.encoding = THREE.sRGBEncoding;
            texture.wrapS = THREE.ClampToEdgeWrapping;
            texture.wrapT = THREE.ClampToEdgeWrapping;

            const material = new THREE.MeshBasicMaterial({ map: texture });
            setBakedMaterial(material);

            scene.traverse((child: any) => {
                if (child.isMesh) {
                    child.material = material;
                }
            });
        });
    }, [modelPath, texturePath, scene]);

    return { scene, bakedMaterial };
};

export const animateSectionBorders = (
    id: string,
    scrollOffset: number,
    initialTopRadius: number,
    finalTopRadius: number,
    initialBottomRadius: number,
    finalBottomRadius: number,
    topStart: number,
    topEnd: number,
    bottomStart: number,
    bottomEnd: number
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
};
