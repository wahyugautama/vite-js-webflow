import './styles/style.css'

import * as THREE from 'three'
const canvas = document.querySelector('canvas.webgl')
const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
)
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
const cube = new THREE.Mesh(geometry, material)
scene.add(cube)
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)
document.body.appendChild(renderer.domElement)
