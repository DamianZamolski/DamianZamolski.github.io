import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { faWeight, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import DarkArea from '../../area/dark-area/dark-area'
import IconText from '../../../icon-text/icon-text'
import List from '../../../list/list'
import { nav } from './nav.module.scss'

const Link = ({ icon, page, text }) => (
  <GatsbyLink to={page}>
    <IconText icon={icon} text={text} />
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
              <Link icon={faSun} page='/routines/morning' text='Morning' />,
              <Link icon={faMoon} page='/routines/evening' text='Evening' />,
            ]}
            ordered
          />
        </>,
        <Link icon={faWeight} page='/macronutrients' text='Macronutrients' />,
      ]}
    />
  </DarkArea>
)

export default Nav
