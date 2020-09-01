import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import DarkArea from '../../area/dark-area/dark-area'
import List from '../../../list/list'
import { Sun, Moon, Weight } from '../../../icons'
import { nav } from './nav.module.scss'

const Link = ({ Icon, page, text }) => (
  <GatsbyLink to={page}>
    <Icon />
    {text}
  </GatsbyLink>
)

const Nav = () => (
  <DarkArea Component='nav' id={nav}>
    <List
      items={[
        <>
          Routines:
          <List
            items={[
              <Link Icon={Sun} page='/routines/morning' text='Morning' />,
              <Link Icon={Moon} page='/routines/evening' text='Evening' />,
            ]}
            ordered
          />
        </>,
        <Link Icon={Weight} page='/macronutrients' text='Macronutrients' />,
      ]}
    />
  </DarkArea>
)

export default Nav
