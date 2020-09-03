import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import {
  faAirFreshener,
  faBalanceScale,
  faBed,
  faBeer,
  faBell,
  faBlender,
  faBook,
  faCalendarDay,
  faCoffee,
  faEnvelope,
  faMobileAlt,
  faMoon,
  faPills,
  faShower,
  faSink,
  faSun,
  faTeeth,
  faTshirt,
  faWeight,
} from '@fortawesome/free-solid-svg-icons'

const createIcon = (icon) => () => <FontAwesomeIcon fixedWidth icon={icon} />

export const AirFreshener = createIcon(faAirFreshener)
export const BalanceScale = createIcon(faBalanceScale)
export const Bed = createIcon(faBed)
export const Beer = createIcon(faBeer)
export const Bell = createIcon(faBell)
export const Blender = createIcon(faBlender)
export const Book = createIcon(faBook)
export const CalendarDay = createIcon(faCalendarDay)
export const Coffee = createIcon(faCoffee)
export const Discord = createIcon(faDiscord)
export const Envelope = createIcon(faEnvelope)
export const Mobile = createIcon(faMobileAlt)
export const Moon = createIcon(faMoon)
export const Pills = createIcon(faPills)
export const Shower = createIcon(faShower)
export const Sink = createIcon(faSink)
export const Sun = createIcon(faSun)
export const Teeth = createIcon(faTeeth)
export const Tshirt = createIcon(faTshirt)
export const Weight = createIcon(faWeight)
