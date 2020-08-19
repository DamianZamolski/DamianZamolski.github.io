import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Page = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)

export default Page
