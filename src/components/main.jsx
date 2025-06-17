//Import Recat
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//Styles
import '../styles/index.scss'

//Components
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
