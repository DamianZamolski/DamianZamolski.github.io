import React from 'react'
import classNames from 'classnames'
import { area } from './area.module.scss'

const Area = ({ children, className, Component = 'div', id }) => (
  <Component id={id} className={classNames(area, className)}>
    {children}
  </Component>
)

export default Area
