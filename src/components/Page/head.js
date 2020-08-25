import React from 'react'
import { Helmet } from 'react-helmet'

const Head = ({ title }) => (
  <Helmet>
    <title>{title}</title>
    <link
      href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
      rel='stylesheet'
    />
  </Helmet>
)

export default Head
