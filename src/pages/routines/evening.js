import React from 'react'
import Page from '../../components/page/page'
import List from '../../components/list/list'

export default () => (
  <Page title='Evening Routine'>
    <List items={['Go to bed at 23:30']} ordered />
  </Page>
)
