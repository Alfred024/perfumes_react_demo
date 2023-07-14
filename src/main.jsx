import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App/App.jsx'
import { AppProvider } from './context/index.jsx'
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
    <AppProvider>
      <App/>
    </AppProvider>
    
  </React.StrictMode>
)
