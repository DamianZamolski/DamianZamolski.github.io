import React from 'react'
import Area from '~area'
import { nav } from './nav.module.scss'

const Nav = () => (
  <nav id={nav}>
    <Area variant='dark'>
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
      </ul>
    </Area>
  </nav>
)

export default Nav
