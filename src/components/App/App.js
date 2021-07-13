import React from 'react'
import { HashRouter as Router } from 'react-router-dom'

import './App.css'

import RobotImage from '../RobotImage/RobotImage'
import GameBox from '../GameBox/GameBox'

const App = () => {
  return (
    <Router>
      <div className='app'>
        <RobotImage isExternal={true} />
        <GameBox />
      </div>
    </Router>
  )
}

export default App
