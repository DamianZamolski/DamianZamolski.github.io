import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './areas/footer/Footer'
import Header from './areas/header/Header'
import Main from './areas/main/Main'
import Nav from './areas/nav/Nav'
import { page } from './Page.module.scss'

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
