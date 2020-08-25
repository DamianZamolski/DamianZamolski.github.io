import React from 'react'
import Area from '../../area/area'
import { areaDark } from './dark-area.module.scss'

const DarkArea = ({ children, id }) => (
  <Area className={areaDark} id={id}>
    {children}
  </Area>
)

export default DarkArea
