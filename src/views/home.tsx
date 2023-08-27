/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Color } from "three"
import vertexShader from "@/features/home/shaders/test.vert?raw"
import fragmentShader from "@/features/home/shaders/test.frag?raw"

export default function HomeView() {
  return (
    <div className="h-screen w-screen">
      <Canvas scene={{ background: new Color(0xdddddd) }}>
        <mesh>
          <planeGeometry args={[2, 2]} />
          <shaderMaterial vertexShader={vertexShader} fragmentShader={fragmentShader} />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  )
}
