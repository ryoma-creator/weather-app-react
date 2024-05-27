import React from 'react'
import ReactDOM from 'react-dom/client'
import Greeting from './Greeting.jsx'
import Bio from './Example.jsx'
import './index.css'
import TodoList from './TestComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Greeting />
    <Bio/>
    <TodoList />
  </React.StrictMode>,
);
