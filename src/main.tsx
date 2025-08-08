import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App.tsx"
import "./index.css"
import { AnimationProvider } from "./contexts/animation-context.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimationProvider>
        <App />
      </AnimationProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
