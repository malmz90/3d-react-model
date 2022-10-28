import React, { Suspense, useEffect, useRef } from 'react'
import { Canvas, useThree, useLoader } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Model from './Alex.js'
import './App.css'

export default function App() {
  return (
    <div>
      <h1 class="title">Sparkhouse 3D</h1>
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          backgroundColor: '#111a21',
          width: '100vw',
          height: '100vh',
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model position={[0.025, -0.9, 0]} /> /* highlight-line */
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}
