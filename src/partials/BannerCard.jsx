import React from 'react'
import { Link } from 'react-router-dom'

const BannerCard = ({value, index}) => {
  return (
    <Link onClick={()=>alert(index)} className='w-32 h-auto bg-zinc-400 rounded-xl'>
    <img src={value.image} alt="" />
    </Link>
  )
}

export default BannerCard