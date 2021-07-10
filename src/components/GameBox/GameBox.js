import React from 'react'
import { Route, Link, useHistory, useParams } from 'react-router-dom'

import './GameBox.css'

import {homePath, guessPath, resultPath} from '../../config/paths'
import RobotImage from '../RobotImage/RobotImage'
import strings from '../../config/strings'

const GameBox = () => {
  return (
    <div className="game-box">
      <RobotImage />
      <div className="game-box-content">
        <Route path={homePath} exact component={GreetingBox} />
        <Route path={guessPath} component={GuessBox} />
        <Route path={resultPath} component={EndBox} />
      </div>
    </div>
  )
}

const GreetingBox = () => {
  return (
    <div>
      {strings.greeting}
      <br />
      {strings.greetingPrompt}
      <span className="hint">({strings.greetingHint})</span>
      <Link to='/guess/1' className='action-button'> Okay! </Link>
    </div>
  )
}

const GuessBox = () => {
  const history = useHistory()
  const {count} = useParams()

  const onResponse = (response) => () => {
    const step = Number(count)
    history.push(step < 7 ? `/guess/${step + 1}` : '/result')
  }

  return <div className='center'>
    {strings.guess(1)}
    <div className='button-group'>
      <button className='action-button' onClick={onResponse(false)}> No </button>
      <button className='action-button' onClick={onResponse(true)}> Yes </button>
    </div>
  </div>
}

const EndBox = () => {
  return <div className='center'>
    {strings.end(1)}
    <Link to='/' className='action-button'> Play Again </Link>
  </div>
}

export default GameBox
