import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from './areas/footer/footer'
import Header from './areas/header/header'
import Main from './areas/main/main'
import Nav from './areas/nav/nav'
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
