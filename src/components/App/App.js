import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import './App.css'

import GameBox from '../GameBox/GameBox'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <GameBox />
      </div>
    </Router>
  )
}

export default App
