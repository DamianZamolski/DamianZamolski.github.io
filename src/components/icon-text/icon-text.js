import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { iconText, icon as iconClassName } from './icon-text.module.scss'

const IconText = ({ icon, text }) => (
  <div className={iconText}>
    <FontAwesomeIcon className={iconClassName} icon={icon} />
    {text}
  </div>
)

export default IconText
