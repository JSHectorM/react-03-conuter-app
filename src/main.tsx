import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import {CounterApp} from './CounterApp'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  
    <CounterApp index={15} />
  </React.StrictMode>,
)
