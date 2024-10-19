import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './components/App.jsx'
import './index.css'
import { ChakraBaseProvider } from '@chakra-ui/react'

createRoot(document.getElementById('root')).render(
  <ChakraBaseProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ChakraBaseProvider>
)
