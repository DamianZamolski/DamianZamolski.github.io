import React from 'react'
import Area from '../../area/area'
import { darkArea } from './dark-area.module.scss'

const DarkArea = ({ children, Component, id }) => (
  <Area className={darkArea} Component={Component} id={id}>
    {children}
  </Area>
)

export default DarkArea
