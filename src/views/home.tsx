/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Color, ShaderMaterial } from "three"
import { Pane } from "tweakpane"
import vertexShader from "@/features/home/shaders/test.vert?raw"
import fragmentShader from "@/features/home/shaders/test.frag?raw"

function Plane() {
  const mat = useRef<ShaderMaterial>(null!)

  useFrame((state) => {
    mat.current.uniforms.uTime.value = state.clock.getElapsedTime()
  })

  return (
    <mesh>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        ref={mat}
        uniforms={{ uTime: { value: 0 } }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      />
    </mesh>
  )
}

export default function HomeView() {
  useEffect(() => {
    const gui = new Pane()
    return () => {
      gui.dispose()
    }
  }, [])

  return (
    <div className="h-screen w-screen">
      <Canvas>
        <Plane />
        <color attach="background" args={[new Color(0xdddddd)]} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
