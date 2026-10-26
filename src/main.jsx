import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
// Système commun chargé avant les styles de page, qui peuvent ainsi le surcharger
import './App.css'
import App from './App.jsx'
import { lireFondEnregistre } from './utils/fond.js'

// Applique le fond choisi lors d'une visite précédente avant le premier rendu
const fondEnregistre = lireFondEnregistre()
if (fondEnregistre) document.documentElement.dataset.fond = fondEnregistre

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)