import React from 'react'
import classNames from 'classnames'
import { area, areaDark, areaLight } from './area.module.scss'

export default ({ children, id, variant }) => (
  <div
    id={id}
    className={classNames(
      area,
      variant === 'dark' && areaDark,
      variant === 'light' && areaLight
    )}
  >
    {children}
  </div>
)
