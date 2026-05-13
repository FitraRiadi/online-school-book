import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';

// Font Extend
import "@fontsource/inter";
import "@fontsource/inter/600.css";
import { BrowserRouter } from 'react-router-dom';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
