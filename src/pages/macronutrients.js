import React, { useCallback, useMemo, useState } from 'react'
import Page from '../components/page/page'
import List from '../components/list/list'

const NumberInput = ({ label, onChange, value }) => (
  <label>
    {label}
    <input onChange={onChange} type='number' min={0} max={99} value={value} />
  </label>
)

const useInput = (min, max) => {
  const [value, setValue] = useState(0)

  const handleValueChange = useCallback(
    ({ target: { value } }) =>
      setValue(value < min ? value : value > max ? max : value),
    [setValue]
  )

  return [value, handleValueChange]
}

export default () => {
  const [bodyMass, handleBodyMassChange] = useInput(0, 200)
  const [bodyFat, handleBodyFatChange] = useInput(0, 100)
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
      <List
        items={[
          <>
            <NumberInput
              label='Body Mass (BM) ≈'
              onChange={handleBodyMassChange}
              value={bodyMass}
            />
            kg
          </>,
          <>
            <NumberInput
              label='Body Fat (BF) ≈'
              onChange={handleBodyFatChange}
              value={bodyFat}
            />
            %
          </>,
          <NumberInput
            label='Exercise Time (ET) ≈'
            onChange={handleExcerciseTimeChange}
            value={excerciseTime}
          />,
          <>Lean Body Mass (LBM) ≈ BM * (1 - BF / 100) ≈ {fixedLeanBodyMass}</>,
          <>
            Basal Metabolic Rate (BMR) ≈ 370 + 21.6 * LBM ≈{' '}
            {fixedBasalMetabolicRate}kcal
          </>,
          <>
            Total Daily Energy Expenditure (TDEE) ≈ BMR * (1.2 + ET * 0.35) ≈{' '}
            {fixedTotalDailyEnergyExpenditure}kcal
          </>,
          <>Proteins ≈ {proteins}g</>,
          <>Fats ≈ {fats}g</>,
          <>Carbohydrates ≈ {carbohydrates}g</>,
        ]}
        ordered
      />
    </Page>
  )
}
