import React from 'react'
import DarkArea from '../../area/dark-area/dark-area'
import List from '../../../list/list'
import { Link } from '../../../link'
import {
  Sun,
  Moon,
  Weight,
  CalendarDay,
  BalanceScale,
  Book,
} from '../../../icons'
import { nav } from './nav.module.scss'

const Nav = () => (
  <DarkArea Component='nav' id={nav}>
    <List
      items={[
        <>
          <CalendarDay />
          Journal
          <List
            items={[<Link page='/journal/2020-09-09'>2020-09-09</Link>]}
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
        <>
          <Book />
          Books
          <List
            items={[
              <Link page='/books/12-rules-for-life'>12 Rules for Life</Link>,
              <Link page='/books/first-man-in'>First Man In</Link>,
            ]}
            padded
          />
        </>,
      ]}
    />
  </DarkArea>
)

export default Nav
