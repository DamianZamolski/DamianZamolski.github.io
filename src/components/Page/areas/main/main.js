import React from 'react'
import Area from '~area'
import { main } from './Main.module.scss'

export default ({ children }) => (
  <main id={main}>
    <Area variant='light'>{children}</Area>
  </main>
)
