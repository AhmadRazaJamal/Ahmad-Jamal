import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { useState, useEffect } from 'react';

export const useMultiplier = (screenSize: number): number => (screenSize >= 768 ? 2 : 1.5);
export const positionCamera = (screenSize: number): number => (screenSize >= 768 ? 0 : 12.4);
export const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

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

    const handleAnimation = () => {
        const viewportHeight = window.innerHeight;
        const adjustedHeightMultiplier = (heightMultiplier / 100) * viewportHeight;

        if (isActive) {
            const heightIncrement = Math.max(0, (scrollOffset - activationStart) * adjustedHeightMultiplier);
            progressBar.style.height = `${Math.max(1, heightIncrement)}px`;
        } else {
            progressBar.style.height = '0px';
        }
    };

    requestAnimationFrame(handleAnimation);
};

interface ModelWithTextures {
    scene: THREE.Group;
    bakedMaterial: THREE.MeshBasicMaterial | null;
}

export const loadModelWithTextures = (modelPath: string, texturePath: string): ModelWithTextures => {
    const { scene } = useGLTF(modelPath) as unknown as { scene: THREE.Group };
    const [bakedMaterial, setBakedMaterial] = useState<THREE.MeshBasicMaterial | null>(null);

    useEffect(() => {
        const textureLoader = new THREE.TextureLoader();
        textureLoader.load(texturePath, (texture) => {
            texture.flipY = false;
            texture.encoding = THREE.sRGBEncoding;
            texture.wrapS = THREE.ClampToEdgeWrapping;
            texture.wrapT = THREE.ClampToEdgeWrapping;
            // Reduce GPU work and memory
            texture.generateMipmaps = false;
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;

            const material = new THREE.MeshBasicMaterial({ map: texture });
            setBakedMaterial(material);

            scene.traverse((child: THREE.Object3D) => {
                if ((child as THREE.Mesh).isMesh) {
                    (child as THREE.Mesh).material = material;
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
): void => {
    const section = document.getElementById(id) as HTMLElement;
    if (!section) return;

    const lerp = (start: number, end: number, t: number): number => (1 - t) * start + t * end;
    const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

    const viewportHeight = window.innerHeight;
    const topRadiusScale = viewportHeight / 800;
    const bottomRadiusScale = viewportHeight / 800;

    const animateBorderRadius = (
        offset: number,
        start: number,
        end: number,
        initialRadius: number,
        finalRadius: number,
        radiusScale: number,
        borderRadiusProperty: 'borderTopLeftRadius' | 'borderBottomLeftRadius'
    ): void => {
        if (offset >= start && offset <= end) {
            const normalizedProgress = (offset - start) / (end - start);
            const progress = easeOutCubic(normalizedProgress);
            const newRadius = lerp(initialRadius, finalRadius, progress) * radiusScale;
            section.style[borderRadiusProperty] = `${newRadius}px`;
        } else if (offset < start) {
            section.style[borderRadiusProperty] = `${initialRadius * radiusScale}px`;
        } else {
            section.style[borderRadiusProperty] = `${finalRadius * radiusScale}px`;
        }
    };

    animateBorderRadius(scrollOffset, topStart, topEnd, initialTopRadius, finalTopRadius, topRadiusScale, 'borderTopLeftRadius');
    animateBorderRadius(scrollOffset, bottomStart, bottomEnd, initialBottomRadius, finalBottomRadius, bottomRadiusScale, 'borderBottomLeftRadius');
};
