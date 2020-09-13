import React, { Fragment } from 'react'
import { numberCell } from './diet.module.scss'

export const createIngredient = (product, quantity) => ({
  macronutrients: {
    carbohydrates: product.carbohydrates * quantity,
    fats: product.fats * quantity,
    proteins: product.proteins * quantity,
  },
  product,
  quantity,
})

export const createMeal = (name, ingredients) => ({
  ingredients,
  macronutrients: createMacronutrients(ingredients),
  name,
})

export const createDiet = (meals) => ({
  macronutrients: createMacronutrients(meals),
  meals,
})

const createMacronutrients = (items) =>
  items.reduce(
    (macronutrients, { macronutrients: { carbohydrates, fats, proteins } }) => {
      macronutrients.carbohydrates += carbohydrates
      macronutrients.fats += fats
      macronutrients.proteins += proteins
      return macronutrients
    },
    { proteins: 0, fats: 0, carbohydrates: 0 }
  )

const NumberCell = ({ value }) => <td className={numberCell}>{value}</td>
const FixedNumberCell = ({ value }) => <NumberCell value={value.toFixed(3)} />

const Diet = ({
  diet: {
    macronutrients: { carbohydrates, fats, proteins },
    meals,
  },
}) => (
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Quantity</th>
        <th>Proteins</th>
        <th>Fats</th>
        <th>Carbohydrates</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Total</td>
        <td />
        <FixedNumberCell value={proteins} />
        <FixedNumberCell value={fats} />
        <FixedNumberCell value={carbohydrates} />
      </tr>
      {meals.map(
        ({
          ingredients,
          macronutrients: { carbohydrates, fats, proteins },
          name,
        }) => (
          <Fragment key={name}>
            <tr>
              <td>{name}</td>
              <td />
              <FixedNumberCell value={proteins} />
              <FixedNumberCell value={fats} />
              <FixedNumberCell value={carbohydrates} />
            </tr>
            {ingredients.map(
              ({
                macronutrients: { carbohydrates, fats, proteins },
                product: { name },
                quantity,
              }) => (
                <tr key={name}>
                  <td>{name}</td>
                  <NumberCell value={quantity} />
                  <FixedNumberCell value={proteins} />
                  <FixedNumberCell value={fats} />
                  <FixedNumberCell value={carbohydrates} />
                </tr>
              )
            )}
          </Fragment>
        )
      )}
    </tbody>
  </table>
)

export default Diet
