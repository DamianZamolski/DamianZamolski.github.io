import React from 'react'
import Area from '../../area/Area'
import List from '../../../list/list'
import { Discord, Envelope } from '../../../icons'
import { footer } from './Footer.module.scss'

const Footer = () => (
  <Area Component='footer' id={footer}>
    <List
      items={[
        <>
          <Envelope />
          damian.zamola.zamolski@gmail.com
        </>,
        <>
          <Discord />
          DamianZamolski#8167
        </>,
      ]}
    />
  </Area>
)

export default Footer
