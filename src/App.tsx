import { Routes, Route } from "react-router-dom"
import { ScrollProgressIndicator } from "./components/scroll-progress-indicator"
import Home from "./pages/Home"
import ProjectDetail from "./pages/ProjectDetail"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <>
      <ScrollProgressIndicator />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
