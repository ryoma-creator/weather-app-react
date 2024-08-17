import React, {useState} from 'react'
import WeatherDisplay from './components/WeatherDisplay'
import axios from 'axios'

function App() {

  return (
    <div className='app'>
      <WeatherDisplay />
    </div>
  )
}

export default App
