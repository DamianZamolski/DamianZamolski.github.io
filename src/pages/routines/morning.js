import React from 'react'
import {
  faBell,
  faCoffee,
  faShower,
  faBlender,
} from '@fortawesome/free-solid-svg-icons'
import IconText from '../../components/icon-text/icon-text'
import List from '../../components/list/list'
import Page from '../../components/page/page'

export default () => (
  <Page title='Morning Routine'>
    <List
      items={[
        <IconText icon={faBell} text='Wake up at 8:00.' />,
        <IconText icon={faCoffee} text='Brew a coffee' />,
        <IconText icon={faShower} text='Have a shower' />,
        <IconText
          icon={faBlender}
          text='Blend the coffee with protein powder'
        />,
      ]}
      ordered
    />
  </Page>
)
