import React from 'react'
import Area from '~area'
import { header } from './Header.module.scss'

export default ({ title }) => (
  <Area id={header}>
    <h1>{title}</h1>
  </Area>
)
