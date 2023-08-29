/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Color, Mesh, ShaderMaterial } from "three"
import { usePaneContext } from "@/features/home/pane"

function Box() {
  const { pane, data } = usePaneContext()
  const mesh = useRef<Mesh>(null!)
  const mat = useRef<ShaderMaterial>(null!)

  useEffect(() => {
    const folder = pane.addFolder({
      title: "Test",
    })

    folder
      .addBinding(data, "radius", {
        min: 0,
        max: 0.5,
      })
      .on("change", (e) => {
        // mat.current.uniforms.uRadius.value = e.value
      })
    folder
      .addBinding(data, "center", {
        x: { min: 0, max: 1 },
        y: { min: 0, max: 1 },
      })
      .on("change", (e) => {
        const { x, y } = e.value
        // mat.current.uniforms.uCenter.value = new Vector2(x, y)
      })
    return () => {
      folder.dispose()
    }
  }, [data, pane])

  useFrame((state, delta) => {
    // mat.current.uniforms.uTime.value = state.clock.getElapsedTime()
    mesh.current.rotation.y += delta
    mesh.current.rotation.x += delta
  })

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2, 2, 2]} />
      {/* <shaderMaterial
        ref={mat}
        uniforms={{ uTime: { value: 0 }, uRadius: { value: 0 }, uCenter: { value: new Vector2(0.5, 0.5) } }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
      /> */}
      <meshStandardMaterial color={[255, 255, 255]} />
    </mesh>
  )
}

export default function HomeView() {
  return (
    <div className="h-screen w-screen">
      <Canvas>
        <Box />
        <pointLight position={[0, 10, 10]} intensity={0.5} />
        <color attach="background" args={[new Color(0x000)]} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}
