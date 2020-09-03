import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

export const Link = ({ children, page }) => (
  <GatsbyLink to={page}>{children}</GatsbyLink>
)
