import * as THREE from 'three'

// Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.SphereGeometry(4, 32 , 32 )
const material = new THREE.MeshStandardMaterial({ color: 'red' })
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

// Size
const size = {
    height: window.innerHeight,
    width: window.innerWidth,
}

// Light
const light = new THREE.PointLight( 0xFFFFFF, 1, 100)
light.position.set(0 ,0 , 4.5);
scene.add(light)

// Camera
const camera = new THREE.PerspectiveCamera(45, size.width / size.height ,0.1 ,100)
camera.position.z = 15
scene.add(camera)


// Camvas
const canvas = document.querySelector('#webgl')

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setSize(size.width,size.height)
renderer.render(scene, camera)
