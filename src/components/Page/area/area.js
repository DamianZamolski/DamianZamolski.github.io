import React from 'react'
import classNames from 'classnames'
import { area } from './area.module.scss'

export default ({ children, className, id }) => (
  <div id={id} className={classNames(area, className)}>
    {children}
  </div>
)
