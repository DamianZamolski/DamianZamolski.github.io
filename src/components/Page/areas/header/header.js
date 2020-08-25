import React from 'react'
import Area from '../../area/Area'
import { header } from './Header.module.scss'

const Header = ({ title }) => (
  <Area id={header}>
    <h1>{title}</h1>
  </Area>
)

export default Header
