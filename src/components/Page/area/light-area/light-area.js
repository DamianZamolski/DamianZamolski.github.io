import React from 'react'
import { areaLight } from './light-area.module.scss'
import Area from '~area'

export default ({ children, id }) => (
  <Area className={areaLight} id={id}>
    {children}
  </Area>
)
