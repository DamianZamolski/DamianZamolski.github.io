import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './footer/Footer'
import Header from './header/Header'
import Main from './main/Main'
import Nav from './nav/Nav'
import { page } from './Page.module.css'

const Page = ({ children, title }) => (
  <div id={page}>
    <Helmet>
      <title>{title}</title>
      <link
        href='https://fonts.googleapis.com/css2?family=Roboto&display=swap'
        rel='stylesheet'
      />
    </Helmet>
    <Nav />
    <Header title={title} />
    <Main>{children}</Main>
    <Footer />
  </div>
)

export default Page
