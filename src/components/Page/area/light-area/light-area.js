import React from 'react'
import Area from '../../area/area'
import { lightArea } from './light-area.module.scss'

const LightArea = ({ children, id }) => (
  <Area className={lightArea} id={id}>
    {children}
  </Area>
)

export default LightArea
