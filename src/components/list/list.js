import React, { useMemo } from 'react'
import { list } from './list.module.scss'

const List = ({ items, ordered }) => {
  const Component = useMemo(() => (ordered ? 'ol' : 'ul'), [ordered])

  return (
    <Component className={list}>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </Component>
  )
}

export default List
