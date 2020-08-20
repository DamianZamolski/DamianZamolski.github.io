import React from 'react'
import { header } from './Header.module.scss'

const Header = ({ title }) => (
  <header id={header}>
    <h1>{title}</h1>
  </header>
)

export default Header
