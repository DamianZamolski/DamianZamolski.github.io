import React from 'react'
import DarkArea from '../../area/dark-area/dark-area'
import List from '../../../list/list'
import { Link } from '../../../link'
import { Sun, Moon, Weight, CalendarDay, BalanceScale } from '../../../icons'
import { nav } from './nav.module.scss'

const Nav = () => (
  <DarkArea Component='nav' id={nav}>
    <List
      items={[
        <>
          <CalendarDay />
          Journal
          <List
            items={[<Link page='/journal/2020-09-03'>2020-09-03</Link>]}
            ordered
            padded
          />
        </>,
        <>
          <BalanceScale />
          Routines:
          <List
            items={[
              <Link page='/routines/morning'>
                <Sun />
                Morning
              </Link>,
              <Link page='/routines/evening'>
                <Moon />
                Evening
              </Link>,
            ]}
            ordered
            padded
          />
        </>,
        <Link page='/macronutrients'>
          <Weight />
          Macronutrients
        </Link>,
      ]}
    />
  </DarkArea>
)

export default Nav
