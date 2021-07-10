import React from 'react'
import { Route } from 'react-router-dom'

import './RobotImage.css'

import { homePath, guessPath, resultPath } from '../../config/paths'

import robotImageHello from '../../public/img/BotHello.svg'
import robotImageThinking from '../../public/img/BotThinking.svg'
import robotImageAha from '../../public/img/BotAha.svg'

const RobotImage = () => {
  return (
    <>
      <Route
        path={homePath}
        exact
        component={RobotImageFromPath(robotImageHello)}
      />
      <Route
        path={guessPath}
        component={RobotImageFromPath(robotImageThinking)}
      />
      <Route path={resultPath} component={RobotImageFromPath(robotImageAha)} />
    </>
  )
}

const RobotImageFromPath = (p) => () => (
  <img className="robot-image" src={p} alt={'Robot mascot'} />
)

export default RobotImage
