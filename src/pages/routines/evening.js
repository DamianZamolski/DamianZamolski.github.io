import React from 'react'
import Page from '../../components/page/page'
import Checklist from '../../components/list/checklist/checklist'
import {
  AirFreshener,
  Bed,
  Book,
  Mobile,
  Sink,
  Teeth,
  Pills,
  Tshirt,
} from '../../components/icons'

export default () => (
  <Page title='Evening Routine'>
    <Checklist
      items={[
        <h2>
          <Mobile />
          Plug in the phone.
        </h2>,
        <h2>
          <Book />
          Start listening to an audiobook.
        </h2>,
        <h2>
          <AirFreshener />
          Apply an antiperspirant.
        </h2>,
        <h2>
          <Teeth />
          Clean your mouth.
        </h2>,
        <h2>
          <Sink />
          Wash the dishes.
        </h2>,
        <h2>
          <Tshirt />
          Prepare clothes.
        </h2>,
        <h2>
          <Pills />
          Prepare pills.
        </h2>,
        <h2>
          <Bed />
          Go to bed at 23:30
        </h2>,
      ]}
      ordered
    />
  </Page>
)
