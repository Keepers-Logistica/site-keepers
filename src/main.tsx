import './index.css'
import 'swiper/css'

import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './app.tsx' // Import Swiper styles

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
