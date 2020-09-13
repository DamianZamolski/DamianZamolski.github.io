import React from 'react'
import Page from '../../components/page/page'
import List from '../../components/list/list'

export default () => (
  <Page title='First Man In: Leading from the Front'>
    <List
      items={[
        <h2>Don’t let anyone define who you are</h2>,
        <h2>Make your enemy your energy</h2>,
        <h2>Leaders stand apart from crowds</h2>,
        <h2>Make friends with your demons</h2>,
        <h2>You don’t need to be the leader to lead</h2>,
        <h2>
          Failure isn’t making the mistake, it’s allowing the mistake to win
        </h2>,
        <h2>The war is always in your head</h2>,
        <h2>The power of intelligent waiting</h2>,
        <h2>How to avoid a mutiny</h2>,
        <h2>The ultimate leadership lesson</h2>,
      ]}
    />
  </Page>
)
