import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster  position="bottom-right"
                reverseOrder={false}
                toastOptions={{ duration: 5000 }}/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
