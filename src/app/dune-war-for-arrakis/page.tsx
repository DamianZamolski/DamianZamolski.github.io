'use client';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ChangeEvent, Fragment, useCallback, useState } from 'react';

export default function Page() {
  const [attackerUnits, setAttackerUnits] = useState(0);
  const [attackerSuperUnits, setAttackerSuperUnits] = useState(0);
  const [attackerLeaders, setAttackerLeaders] = useState(0);
  const [defenderUnits, setDefenderUnits] = useState(0);
  const [defenderSuperUnits, setDefenderSuperUnits] = useState(0);
  const [defenderLeaders, setDefenderLeaders] = useState(0);

  const handleRadioChange = useCallback(
    (setter: (value: number) => void) =>
      (event: ChangeEvent<HTMLInputElement>) => {
        setter(Number(event.target.value));
      },
    [],
  );

  return (
    <main>
      <header>
        <Breadcrumbs />
        <h1>Battle Setup</h1>
      </header>
      <form>
        <fieldset>
          <legend>Attacker Units</legend>
          {Array.from({ length: 7 }, (_, i) => i).map((value) => (
            <Fragment key={value}>
              <input
                id={`attacker-units-${value}`}
                type='radio'
                value={value}
                checked={attackerUnits === value}
                onChange={handleRadioChange(setAttackerUnits)}
              />
              <label htmlFor={`attacker-units-${value}`}>{value}</label>
            </Fragment>
          ))}
        </fieldset>
        <fieldset>
          <legend>Attacker Super Units</legend>
          {Array.from({ length: 7 }, (_, i) => i).map((value) => (
            <Fragment key={value}>
              <input
                id={`attacker-super-units-${value}`}
                type='radio'
                value={value}
                checked={attackerSuperUnits === value}
                onChange={handleRadioChange(setAttackerSuperUnits)}
              />
              <label htmlFor={`attacker-super-units-${value}`}>{value}</label>
            </Fragment>
          ))}
        </fieldset>
        <fieldset>
          <legend>Attacker Leaders</legend>
          {Array.from({ length: 11 }, (_, i) => i).map((value) => (
            <Fragment key={value}>
              <input
                id={`attacker-leaders-${value}`}
                type='radio'
                value={value}
                checked={attackerLeaders === value}
                onChange={handleRadioChange(setAttackerLeaders)}
              />
              <label htmlFor={`attacker-leaders-${value}`}>{value}</label>
            </Fragment>
          ))}
        </fieldset>
        <fieldset>
          <legend>Defender Units</legend>
          {Array.from({ length: 7 }, (_, i) => i).map((value) => (
            <Fragment key={value}>
              <input
                id={`defender-units-${value}`}
                type='radio'
                value={value}
                checked={defenderUnits === value}
                onChange={handleRadioChange(setDefenderUnits)}
              />
              <label htmlFor={`defender-units-${value}`}>{value}</label>
            </Fragment>
          ))}
        </fieldset>
        <fieldset>
          <legend>Defender Super Units</legend>
          {Array.from({ length: 7 }, (_, i) => i).map((value) => (
            <Fragment key={value}>
              <input
                id={`defender-super-units-${value}`}
                type='radio'
                value={value}
                checked={defenderSuperUnits === value}
                onChange={handleRadioChange(setDefenderSuperUnits)}
              />
              <label htmlFor={`defender-super-units-${value}`}>{value}</label>
            </Fragment>
          ))}
        </fieldset>
        <fieldset>
          <legend>Defender Leaders</legend>
          {Array.from({ length: 11 }, (_, i) => i).map((value) => (
            <Fragment key={value}>
              <input
                id={`defender-leaders-${value}`}
                type='radio'
                value={value}
                checked={defenderLeaders === value}
                onChange={handleRadioChange(setDefenderLeaders)}
              />
              <label htmlFor={`defender-leaders-${value}`}>{value}</label>
            </Fragment>
          ))}
        </fieldset>
      </form>
    </main>
  );
}
