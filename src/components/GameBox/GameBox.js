import React from 'react'
import { Route, Link, useHistory, useParams } from 'react-router-dom'

import './GameBox.css'

import {homePath, guessPath, resultPath} from '../../config/paths'
import RobotImage from '../RobotImage/RobotImage'
import strings from '../../config/strings'
import { calcPivot } from '../../util/game'
import useResponses from '../../hooks/useResponses'
import { GUESS_COUNT } from '../../config/game'

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
  const {responses, addResponse} = useResponses()

  const onResponse = (response) => () => {
    // Determine what the pivot was
    const pivot = calcPivot(responses)

    // Add response
    addResponse(pivot, response)

    // Show next guess / results
    const step = Number(count)
    history.push(step < GUESS_COUNT ? `/guess/${step + 1}` : '/result')
  }

  return <div className='center'>
    {strings.guess(calcPivot(responses))}
    <div className='button-group'>
      <button className='action-button' onClick={onResponse(false)}> No </button>
      <button className='action-button' onClick={onResponse(true)}> Yes </button>
    </div>
  </div>
}

const EndBox = () => {
  const history = useHistory()
  const {responses, clear} = useResponses()

  const onRestart = () => {
    clear()
    history.push('/')  
  }

  return <div className='center'>
    {strings.end(calcPivot(responses))}
    <button className='action-button' onClick={onRestart}> Play Again </button>
  </div>
}

export default GameBox
