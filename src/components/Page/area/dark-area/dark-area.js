import React from 'react'
import Area from '../../area/area'
import { darkArea } from './dark-area.module.scss'

const DarkArea = ({ children, id }) => (
  <Area className={darkArea} id={id}>
    {children}
  </Area>
)

export default DarkArea
