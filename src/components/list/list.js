import React, { useMemo } from 'react'
import classNames from 'classnames'
import { list, padded as paddedClassName } from './list.module.scss'

const List = ({ itemClassName, items, ordered, padded }) => {
  const Component = useMemo(() => (ordered ? 'ol' : 'ul'), [ordered])

  const listItems = useMemo(
    () =>
      items.map((item, index) => (
        <li
          className={classNames(itemClassName, padded && paddedClassName)}
          key={index}
        >
          {item}
        </li>
      )),
    [itemClassName, items]
  )

  return <Component className={list}>{listItems}</Component>
}

export default List
