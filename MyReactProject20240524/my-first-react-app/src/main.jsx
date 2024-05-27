import React from 'react'
import ReactDOM from 'react-dom/client'
import Greeting from './Greeting.jsx'
import {MyName} from './Example.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Greeting />
    <MyName />
  </React.StrictMode>
);
