import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import PixelTransition from './pages/PixelTransition.tsx'

createRoot(document.getElementById('root')!).render(
  <PixelTransition>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </PixelTransition>
)
