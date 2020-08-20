import React from 'react'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Nav from './Nav/Nav'
import { page } from './Page.module.css'

const Page = ({ children, title }) => (
  <div id={page}>
    <Nav />
    <Header title={title} />
    <Content>{children}</Content>
    <Footer />
  </div>
)

export default Page
