import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Updated_Portfolio/">
      <Routes>
        <Route path="#" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
