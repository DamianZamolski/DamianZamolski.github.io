import React from 'react'
import Area from '../../area/area'
import { areaLight } from './light-area.module.scss'

const LightArea = ({ children, id }) => (
  <Area className={areaLight} id={id}>
    {children}
  </Area>
)

export default LightArea
