import React from 'react'
import Page from '../../components/page/page'
import List from '../../components/list/list'

export default () => (
  <Page title='12 Rules for Life: An Antidote to Chaos'>
    <List
      items={[
        <h2>Stand up straight with your shoulders back</h2>,
        <h2>
          Treat yourself like you are someone you are responsible for helping
        </h2>,
        <h2>Make friends with people who want the best for you</h2>,
        <h2>
          Compare yourself with who you were yesterday, not with who someone
          else is today
        </h2>,
        <h2>
          Do not let your children do anything that makes you dislike them
        </h2>,
        <h2>Set your house in perfect order before you criticize the world</h2>,
        <h2>Pursue what is meaningful (not what is expedient)</h2>,
        <h2>Tell the truth — or, at least, don’t lie</h2>,
        <h2>
          Assume that the person you are listening to might know something you
          don’t
        </h2>,
        <h2>Be precise in your speech</h2>,
        <h2>Do not bother children when they are skate-boarding</h2>,
        <h2>Pet a cat when you encounter one on the street</h2>,
      ]}
    />
  </Page>
)
