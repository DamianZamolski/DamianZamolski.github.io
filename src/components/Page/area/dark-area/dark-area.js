import React from 'react'
import { areaDark } from './dark-area.module.scss'
import Area from '~area'

export default ({ children, id }) => (
  <Area className={areaDark} id={id}>
    {children}
  </Area>
)
