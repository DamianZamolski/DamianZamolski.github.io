import React from 'react'
import Area from '~area'
import { header } from './Header.module.scss'

export default ({ title }) => (
  <header id={header}>
    <Area>
      <h1>{title}</h1>
    </Area>
  </header>
)
