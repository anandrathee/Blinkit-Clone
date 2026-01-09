import React, { act } from 'react'
import { PiTagSimpleThin } from "react-icons/pi";


const ProductCard = ({value}) => {
    const {title, weight, image, actualPrice, discountedPrice, discount, isDiscounted } = value;
  return (
    <div className='w-48 h-70 p-2 border border-zinc-300 rounded-lg flex flex-col items-center gap-2 relative shrink-0 '>
       
        {discount > 0 ? (
            <div className='discountBadge w-8 h-8 absolute top-0 rounded-b-2xl left-4 text-center text-white bg-blue-400 overflow-hidden'>
            <p className='text-[0.70rem] text-center font-bold'>{discount}%</p>
            <p className='text-[0.70rem] text-center font-bold -mt-1'>OFF</p>
        </div>
        ):("")}

     
        <div className="img w-38 h-38">
            <img className='w-full h-full' src={image} alt="" />
        </div>
        <div className="details w-full h-full  flex flex-col items-start justify-between   ">
            <p className="title font-semibold text-sm line-clamp-2">{title}</p>
            <p className="weight text-xs text-zinc-600">{weight}</p>
            <div className="priceBtn w-full flex items-center justify-between">
                <div className="price text-xs font-semibold">
                    <p>{discount > 0 ? discountedPrice: actualPrice}</p>
                    <p className='text-zinc-600 line-through'>{discount > 0 ? actualPrice :"" }</p>
                </div>
                <button className='border bg-[#f7fff9] border-green-700 w-18 h-8 rounded-md text-sm text-green-800 font-semibold'>ADD</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard