import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import { BrandProvider } from './context/BrandContext'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider>
            <BrandProvider>
                <App />
            </BrandProvider>
        </ThemeProvider>
    </StrictMode>,
)
