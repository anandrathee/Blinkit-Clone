import React from 'react'
import Home from './components/Home'
import Banner from './partials/Banner'
import Navbar from './partials/Navbar'
import Products from './components/Products'

const App = () => {
  return (
    <>
      <Navbar/>
    <Home>
      <Banner/>
      <Products/>
    </Home>
    </>
  )
}

export default App