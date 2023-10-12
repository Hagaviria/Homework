import React from 'react'
import ReactDOM from 'react-dom/client'
import './Challenge 13/TodoEst.css'
import { MultipleCustomHooks } from './Challenge 11/MultipleCustomHooks'
import { Father } from './Challenge 12/Father'
import { TodoApp } from './Challenge 13/TodoApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <TodoApp/>
  </React.StrictMode>,
)
