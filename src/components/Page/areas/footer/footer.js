import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithubSquare,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'
import Area from '../../area/Area'
import { footer } from './Footer.module.scss'

const Footer = () => (
  <Area Component='footer' id={footer}>
    <FontAwesomeIcon icon={faTwitterSquare} />
    <FontAwesomeIcon icon={faGithubSquare} />
  </Area>
)

export default Footer
