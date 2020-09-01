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
        <>
          <Bell />
          Wake up at 8:00.
        </>,
        <>
          <Coffee />
          Brew a coffee.
        </>,
        <>
          <Weight />
          Weigh yourself.
        </>,
        <>
          <Beer />
          Drink a mug of water.
        </>,
        <>
          <Shower />
          Have a shower.
        </>,
        <>
          <Blender />
          Blend the coffee with protein powder.
        </>,
        <>
          <Pills />
          Take morning pills.
        </>,
        <>
          <Teeth />
          Clean your mouth.
        </>,
      ]}
      ordered
    />
  </Page>
)
