import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import { useLoader } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three';

export default function Experience()
{
    const model = useGLTF('./office.glb')
    


    const textureLoader = new THREE.TextureLoader()
    /**
 * Textures
 */
const bakedTexture = textureLoader.load('baked-office-textures.png')

/**
 * Materials
 */
// Baked material
const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture })
bakedTexture.flipY = false

bakedTexture.encoding = THREE.sRGBEncoding

bakedTexture.wrapS = THREE.ClampToEdgeWrapping;
bakedTexture.wrapT = THREE.ClampToEdgeWrapping;

    model.scene.traverse((child) => {
            child.material = bakedMaterial
        })

    return <>

      <primitive object={ model.scene } scale={ 0.1 } />
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight castShadow position={ [ 1, 2, 3 ] } intensity={ 1.5 } />
        <ambientLight intensity={ 0.5 } />

    </>
}