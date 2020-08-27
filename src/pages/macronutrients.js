import React, { useCallback, useMemo, useState } from 'react'
import Page from '../components/page/page'

const NumberInput = ({ label, onChange, value }) => (
  <label>
    {label}
    <input onChange={onChange} type='number' value={value} />
  </label>
)

const useInput = () => {
  const [value, setValue] = useState(0)

  const handleValueChange = useCallback(
    ({ target: { value } }) => setValue(value),
    [setValue]
  )

  return [value, handleValueChange]
}

export default () => {
  const [bodyMass, handleBodyMassChange] = useInput()
  const [bodyFat, handleBodyFatChange] = useInput()
  const [excerciseTime, handleExcerciseTimeChange] = useInput()

  const leanBodyMass = useMemo(() => bodyMass * (1 - bodyFat / 100), [
    bodyFat,
    bodyMass,
  ])

  const fixedLeanBodyMass = useMemo(() => leanBodyMass.toFixed(1), [
    leanBodyMass,
  ])

  const basalMetabolicRate = useMemo(() => 370 + 21.6 * leanBodyMass, [
    leanBodyMass,
  ])

  const fixedBasalMetabolicRate = useMemo(() => basalMetabolicRate.toFixed(0), [
    basalMetabolicRate,
  ])

  const totalDailyEnergyExpenditure = useMemo(
    () => basalMetabolicRate * (1.2 + excerciseTime * 0.35),
    [basalMetabolicRate, excerciseTime]
  )

  const fixedTotalDailyEnergyExpenditure = useMemo(
    () => totalDailyEnergyExpenditure.toFixed(0),
    [totalDailyEnergyExpenditure]
  )

  const proteins = useMemo(() => (leanBodyMass * 2.5).toFixed(0), [
    leanBodyMass,
  ])

  const fats = useMemo(
    () => ((totalDailyEnergyExpenditure - proteins * 4) / 18).toFixed(0),
    [totalDailyEnergyExpenditure, proteins]
  )

  const carbohydrates = useMemo(
    () => ((totalDailyEnergyExpenditure - proteins * 4) / 8).toFixed(0),
    [totalDailyEnergyExpenditure, proteins]
  )

  return (
    <Page title='Macronutrients'>
      <ol style={{ paddingLeft: '1em' }}>
        <li>
          <NumberInput
            label='Body Mass (BM) ≈'
            onChange={handleBodyMassChange}
            value={bodyMass}
          />
          kg
        </li>
        <li>
          <NumberInput
            label='Body Fat (BF) ≈'
            onChange={handleBodyFatChange}
            value={bodyFat}
          />
          %
        </li>
        <li>
          <NumberInput
            label='Exercise Time (ET) ≈'
            onChange={handleExcerciseTimeChange}
            value={excerciseTime}
          />
        </li>
        <li>
          Lean Body Mass (LBM) ≈ BM * (1 - BF / 100) ≈ {fixedLeanBodyMass}
        </li>
        <li>
          Basal Metabolic Rate (BMR) ≈ 370 + 21.6 * LBM ≈{' '}
          {fixedBasalMetabolicRate}kcal
        </li>
        <li>
          Total Daily Energy Expenditure (TDEE) ≈ BMR * (1.2 + ET * 0.35) ≈{' '}
          {fixedTotalDailyEnergyExpenditure}kcal
        </li>
        <li>Proteins ≈ {proteins}g</li>
        <li>Fats ≈ {fats}g</li>
        <li>Carbohydrates ≈ {carbohydrates}g</li>
      </ol>
    </Page>
  )
}
