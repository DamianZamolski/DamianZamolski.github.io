import React, { useMemo } from 'react'
import { list } from './list.module.scss'

const List = ({ itemClassName, items, ordered }) => {
  const Component = useMemo(() => (ordered ? 'ol' : 'ul'), [ordered])

  const listItems = useMemo(
    () =>
      items.map((item, index) => (
        <li className={itemClassName} key={index}>
          {item}
        </li>
      )),
    [itemClassName, items]
  )

  return <Component className={list}>{listItems}</Component>
}

export default List
