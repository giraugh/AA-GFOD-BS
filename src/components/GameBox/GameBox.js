import React from 'react'
import { Route, Link, useHistory, useParams } from 'react-router-dom'

import './GameBox.css'

import { homePath, guessPath, resultPath } from '../../config/paths'
import RobotImage from '../RobotImage/RobotImage'
import strings from '../../config/strings'
import useResponses from '../../hooks/useResponses'
import usePivot from '../../hooks/usePivot'
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

const GuessBox = () => {
  const history = useHistory()
  const { count } = useParams()
  const { setResponse } = useResponses()
  const pivot = usePivot(count - 1)

  const step = Number(count)

  // Add a response when a 'yes' / 'no' button is pressed
  const onResponse = (response) => () => {
    // Add response
    setResponse(step - 1, pivot, response)

    // Show next guess / results
    history.push(step < GUESS_COUNT ? `/guess/${step + 1}` : '/result')
  }

  return (
    <div className="center">
      {strings.guess(pivot)}
      <div className="button-group">
        <button className="action-button" onClick={onResponse(false)}>
          No
        </button>
        <button className="action-button" onClick={onResponse(true)}>
          Yes
        </button>
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
      <Link to="/guess/1" className="action-button">
        Okay!
      </Link>
    </div>
  )
}

const EndBox = () => {
  const history = useHistory()
  const { clear } = useResponses()
  const pivot = usePivot(GUESS_COUNT)

  const onRestart = () => {
    clear()
    history.push('/')
  }

  return (
    <div className="center">
      {strings.end(pivot)}
      <button className="action-button" onClick={onRestart}>
        Play Again
      </button>
    </div>
  )
}

export default GameBox
