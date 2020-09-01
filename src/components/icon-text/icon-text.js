import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconText, icon as iconClassName } from './icon-text.module.scss'

const IconText = ({ icon, text }) => (
  <span className={iconText}>
    <FontAwesomeIcon className={iconClassName} fixedWidth icon={icon} />
    {text}
  </span>
)

export default IconText
