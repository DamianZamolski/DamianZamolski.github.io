import React from 'react'
import Page from '../components/page/page'

const bodyMass = 80
const bodyFatPercentage = 0.22
const leanBodyMass = bodyMass * (1 - bodyFatPercentage)
const bmr = 370 + 21.6 * leanBodyMass
const tdee = bmr * 1.35
const proteins = leanBodyMass * 2.5
const fatsAndCarbohydratesEnergy = tdee - 4 * proteins
const fats = fatsAndCarbohydratesEnergy / 18
const carbohydrates = fatsAndCarbohydratesEnergy / 8

export default () => (
  <Page title='Macronutrients'>
    <ol style={{ paddingLeft: '1em' }}>
      <li>Body Mass ≈ {bodyMass}kg</li>
      <li>Body Fat Percentage ≈ {100 * bodyFatPercentage}%</li>
      <li>Lean Body Mass (LBM) ≈ {leanBodyMass.toFixed(0)}kg</li>
      <li>Basal Metabolic Rate (BMR) ≈ {bmr.toFixed(0)}kcal</li>
      <li>Total Daily Energy Expenditure (TDEE) ≈ {tdee.toFixed(0)}kcal</li>
      <li>Proteins ≈ {proteins}g</li>
      <li>Fats ≈ {fats.toFixed(0)}g</li>
      <li>Carbohydrates ≈ {carbohydrates.toFixed(0)}g</li>
    </ol>
  </Page>
)
