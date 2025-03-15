import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./App.css"
import App from './App.jsx'
import Mouse from "./Components/structure/Mouse.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Mouse
      sparkColor='#fff'
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <App />
    </Mouse>
  </StrictMode>,
)
