import React from 'react'
import Page from '../../components/page/page'
import Diet, {
  createDiet,
  createIngredient,
  createMeal,
} from '../../components/diet/diet'
import {
  kfdWpc,
  mctOil,
  butter,
  hazelnuts,
  oats,
  bananas,
  chickpeas,
} from '../../components/diet/products'

export default () => (
  <Page title='2020-09-03'>
    <Diet
      diet={createDiet([
        createMeal('Bulletproof Coffee', [
          createIngredient(kfdWpc, 30),
          createIngredient(mctOil, 15),
          createIngredient(butter, 15),
        ]),
        createMeal('Pre-Workout smoothie', [
          createIngredient(kfdWpc, 20),
          createIngredient(hazelnuts, 50),
          createIngredient(oats, 100),
          createIngredient(bananas, 120),
        ]),
        createMeal('Salad', [createIngredient(chickpeas, 400)]),
      ])}
    />
  </Page>
)
