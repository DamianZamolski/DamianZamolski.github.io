import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Nav from './Nav/Nav'
import { page } from './Page.module.scss'
import Content from './Content/Content'

const Page = ({ children }) => (
  <div id={page}>
    <Nav />
    <Header />
    <Content>{children}</Content>
    <Footer />
  </div>
)

export default Page
