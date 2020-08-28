import React from 'react'
import Area from '../../area/area'
import { lightArea } from './light-area.module.scss'

const LightArea = ({ children, Component, id }) => (
  <Area className={lightArea} Component={Component} id={id}>
    {children}
  </Area>
)

export default LightArea
