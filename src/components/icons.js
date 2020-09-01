import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import {
  faBed,
  faBeer,
  faBell,
  faBlender,
  faCoffee,
  faEnvelope,
  faMoon,
  faPills,
  faShower,
  faSun,
  faTeeth,
  faWeight,
} from '@fortawesome/free-solid-svg-icons'

const createIcon = (icon) => () => <FontAwesomeIcon fixedWidth icon={icon} />

export const Bed = createIcon(faBed)
export const Beer = createIcon(faBeer)
export const Bell = createIcon(faBell)
export const Blender = createIcon(faBlender)
export const Coffee = createIcon(faCoffee)
export const Discord = createIcon(faDiscord)
export const Envelope = createIcon(faEnvelope)
export const Moon = createIcon(faMoon)
export const Pills = createIcon(faPills)
export const Shower = createIcon(faShower)
export const Sun = createIcon(faSun)
export const Teeth = createIcon(faTeeth)
export const Weight = createIcon(faWeight)
