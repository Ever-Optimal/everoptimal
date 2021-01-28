import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'

import GlobalStyles from '../globalStyles'

const Router = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Header />
      <Home />
      <Footer />
    </React.Fragment>
  )
}

export default Router
