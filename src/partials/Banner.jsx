import React, { useContext } from 'react'
import BannerCard from './BannerCard'
import { ProductContext } from '../context/Context'

const Banner = () => {

    const {bannerData} = useContext(ProductContext)
  return (
    <>
    <div className="bannerTop w-full h-60 ">
        <img className='w-full h-full' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg" alt="" />
    </div>
    <div className="bannerCenter flex items-center justify-start gap-6 w-80 h-62 ml-4">
        <img className='w-full' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg" alt="" />
        <img className='w-full' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg" alt="" />
        <img className='w-full' src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg" alt="" />
    </div>
    <div className="bannerBottom w-full h-auto flex flex-wrap items-start -mt-4 justify-start">

        {bannerData && bannerData.map((item,index)=>(
            <BannerCard key={index} value={item} index={index}/>

        ))}
    </div>

    
    </>
  )
}

export default Banner