import React, { useMemo } from 'react'
import List from '../list'
import { item } from './checklist.module.scss'

const Checklist = ({ items }) => {
  const itemsWithCheckboxes = useMemo(
    () =>
      items.map((item) => (
        <>
          <input type='checkbox' />
          {item}
        </>
      )),
    [items]
  )

  return <List itemClassName={item} items={itemsWithCheckboxes} ordered />
}

export default Checklist
