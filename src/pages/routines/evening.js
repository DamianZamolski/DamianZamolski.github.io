import React from 'react'
import Page from '../../components/page/page'
import Checklist from '../../components/list/checklist/checklist'
import { Bed } from '../../components/icons'

export default () => (
  <Page title='Evening Routine'>
    <Checklist
      items={[
        <h2>
          <Bed />
          Go to bed at 23:30
        </h2>,
      ]}
      ordered
    />
  </Page>
)
