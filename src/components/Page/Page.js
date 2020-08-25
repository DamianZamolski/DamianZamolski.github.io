import React from 'react'
import Head from './head'
import Body from './body'
import { page } from './Page.module.scss'

const Page = ({ children, title }) => (
  <div id={page}>
    <Head title={title} />
    <Body title={title}>{children}</Body>
  </div>
)

export default Page
