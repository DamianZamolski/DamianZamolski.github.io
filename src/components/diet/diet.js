import React from 'react'
import List from '../list/list'

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

const Diet = ({
  diet: {
    macronutrients: { carbohydrates, fats, proteins },
    meals,
  },
}) => (
  <>
    {carbohydrates} {fats} {proteins}
    <List
      items={meals.map(
        ({
          ingredients,
          macronutrients: { carbohydrates, fats, proteins },
          name,
        }) => (
          <>
            {name} {carbohydrates} {fats} {proteins}
            <List
              items={ingredients.map(
                ({
                  macronutrients: { carbohydrates, fats, proteins },
                  product: { name },
                  quantity,
                }) => (
                  <>
                    {name} {quantity} {carbohydrates} {fats} {proteins}
                  </>
                )
              )}
              padded
            />
          </>
        )
      )}
      ordered
    />
  </>
)

export default Diet
