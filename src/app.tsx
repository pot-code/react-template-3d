import { RouterProvider } from "react-router-dom"
import router from "./router"
import PaneProvider from "./features/home/pane"

export default function App() {
  return (
    <PaneProvider data={{ radius: 0, center: { x: 0.5, y: 0.5 } }}>
      <RouterProvider router={router} />
    </PaneProvider>
  )
}
