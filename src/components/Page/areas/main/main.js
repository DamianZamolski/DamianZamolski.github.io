import React from 'react'
import Area from '~area'
import { main } from './Main.module.scss'

export default ({ children }) => (
  <Area id={main} variant='light'>
    {children}
  </Area>
)
