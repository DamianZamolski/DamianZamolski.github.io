import React from 'react'
import { Link as GatsbyLink } from 'gatsby'

const Link = ({ children, to }) => <GatsbyLink to={to}>{children}</GatsbyLink>

export default Link
