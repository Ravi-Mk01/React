import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import {Welcome,Guys} from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Welcome/>
    <Guys/>
  </StrictMode>,
)
