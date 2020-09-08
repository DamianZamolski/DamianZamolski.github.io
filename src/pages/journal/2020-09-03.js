import React from 'react'
import Page from '../../components/page/page'
import Diet, {
  createDiet,
  createIngredient,
  createMeal,
} from '../../components/diet/diet'
import { banana, kfdWpc } from '../../components/diet/products'

export default () => (
  <Page title='2020-09-03'>
    <Diet
      diet={createDiet([
        createMeal('Bulletproof Coffee', [
          createIngredient(banana, 100),
          createIngredient(kfdWpc, 30),
        ]),
      ])}
    />
  </Page>
)
