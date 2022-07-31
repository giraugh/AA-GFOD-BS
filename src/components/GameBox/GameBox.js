import React from 'react'
import { Route, Link, useHistory, useParams } from 'react-router-dom'

import { homePath, guessPath, resultPath } from '../../config/paths'
import RobotImage from '../RobotImage/RobotImage'
import { useResponses, usePivot, useQuestionType } from '../../hooks'
import strings from '../../config/strings'
import { GUESS_COUNT } from '../../config/game'

import './GameBox.css'

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
  const { questionType, randomizeQuestionType } = useQuestionType()
  
  // Calculate the pivot given the user's responses up to this step
  const step = Number(count)
  const pivot = usePivot(step - 1)

  // If the user refreshes we lose their responses
  if (!pivot) {
    history.replace('/')
  }

  // Add a response when a yes / no button is pressed
  const onResponse = (response) => () => {
    // Add a response
    setResponse(step - 1, pivot, response, questionType)

    // Change next response type
    randomizeQuestionType()

    // Change page to the next guess / show results if no guesses remaining
    if (step < GUESS_COUNT) {
      history.push(`/guess/${step+1}`)
    } else {
      history.push('/result')
    }
  }

  return (
    <div className="center">
      {strings.guess(pivot, questionType)}
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

  // If user refreshes, we lose their responses
  if (!pivot) {
    history.replace('/')
  }

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
