import React from 'react'
import LightArea from '../../area/light-area/light-area'
import { main } from './Main.module.scss'

const Main = ({ children }) => (
  <LightArea Component='main' id={main}>
    {children}
  </LightArea>
)

export default Main
