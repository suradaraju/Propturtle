import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom'
import './assets/css/solinom.css';
import App from './App.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <HelmetProvider>
    <App />
    </HelmetProvider>
    </BrowserRouter>
  </StrictMode>,
)