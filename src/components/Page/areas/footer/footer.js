import React from 'react'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Area from '../../area/Area'
import IconText from '../../../icon-text/icon-text'
import { footer } from './Footer.module.scss'
import List from '../../../list/list'

const Footer = () => (
  <Area Component='footer' id={footer}>
    <List
      items={[
        <IconText icon={faEnvelope} text='damian.zamola.zamolski@gmail.com' />,
        <IconText icon={faDiscord} text='DamianZamolski#8167' />,
      ]}
    />
  </Area>
)

export default Footer
