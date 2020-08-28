import React from 'react'
import DarkArea from '../../area/dark-area/dark-area'
import { nav, list } from './nav.module.scss'
import Link from './link'

const Nav = () => (
  <DarkArea Component='nav' id={nav}>
    <ul id={list}>
      <Link to='/macronutrients'>Macronutrients</Link>
    </ul>
  </DarkArea>
)

export default Nav
