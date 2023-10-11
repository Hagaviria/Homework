import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Handle } from './Components/Handle.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Handle value = {1}/>
  </React.StrictMode>,
)
