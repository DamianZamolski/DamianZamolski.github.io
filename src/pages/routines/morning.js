import React from 'react'
import Page from '../../components/page/page'
import Checklist from '../../components/list/checklist/checklist'
import {
  Beer,
  Bell,
  Blender,
  Coffee,
  Pills,
  Shower,
  Teeth,
  Weight,
} from '../../components/icons'

export default () => (
  <Page title='Morning Routine'>
    <Checklist
      items={[
        <h2>
          <Bell />
          Wake up at 8:00.
        </h2>,
        <h2>
          <Coffee />
          Brew a coffee.
        </h2>,
        <h2>
          <Weight />
          Weigh yourself.
        </h2>,
        <h2>
          <Beer />
          Drink a mug of water.
        </h2>,
        <h2>
          <Shower />
          Have a shower.
        </h2>,
        <h2>
          <Blender />
          Blend the coffee with protein powder.
        </h2>,
        <h2>
          <Pills />
          Take morning pills.
        </h2>,
        <h2>
          <Teeth />
          Clean your mouth.
        </h2>,
      ]}
      ordered
    />
  </Page>
)
