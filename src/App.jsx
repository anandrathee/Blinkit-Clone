import React from 'react'
import { Routes, Route, Outlet } from 'react-router-dom'  // Add Outlet
import Home from './components/Home'
import Banner from './partials/Banner'
import Navbar from './partials/Navbar'
import Products from './components/Products'
import ItemDetails from './components/ItemDetails'
import Sr from './components/Sr'

const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeLayout/>}>
          <Route index element={
            <Home>
              <Banner/>
              <Products/>
             
            </Home>
          }/>
          <Route path='/:category/:title' element={<ItemDetails />} />
          <Route path='/sr' element={<Sr/>}/>
        </Route>
      </Routes>
    </>
  )
}

const HomeLayout = () => (
  <Home>
    <Outlet />
  </Home>
)

export default App
