// components/Home.jsx
import React from 'react'
import { Outlet } from 'react-router-dom'

const Home = ({children}) => {
  return (
    <div className='home-container w-full h-auto flex flex-col px-14'>
      {children || <Outlet />}  
    </div>
  )
}

export default Home
