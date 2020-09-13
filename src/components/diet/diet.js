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
    Proteins: {proteins}g Fats: {fats}g Carbohydrates: {carbohydrates}g
    <List
      items={meals.map(
        ({
          ingredients,
          macronutrients: { carbohydrates, fats, proteins },
          name,
        }) => (
          <>
            Name: {name} Proteins: {proteins}g Fats: {fats}g Carbohydrates:{' '}
            {carbohydrates}g
            <List
              items={ingredients.map(
                ({
                  macronutrients: { carbohydrates, fats, proteins },
                  product: { name },
                  quantity,
                }) => (
                  <>
                    Name: {name} Quantity: {quantity}g Proteins: {proteins}g
                    Fats: {fats}g Carbohydrates: {carbohydrates}g
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
