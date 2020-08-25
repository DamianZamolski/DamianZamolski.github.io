import React from 'react'
import Footer from './areas/footer/footer'
import Header from './areas/header/header'
import Main from './areas/main/main'
import Nav from './areas/nav/nav'

const Body = ({ children, title }) => (
  <>
    <Nav />
    <Header title={title} />
    <Main>{children}</Main>
    <Footer />
  </>
)

export default Body
