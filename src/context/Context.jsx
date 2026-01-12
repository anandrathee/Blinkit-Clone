import React, { createContext, useEffect, useState } from 'react'
import {productItems, bannerItems} from '../Data/ProductsData'
// import {bData} from '../Data/BannerData'


export const ProductContext = createContext();

const Context = ({children}) => {
    const [bannerData, setBannerData] = useState(bannerItems);


    const [productData, setProductData] = useState(productItems);

    const [categories, setCategories] = useState([
    "Dairy, Bread & Eggs",
    "Rolling paper & tobacco",
    "Snacks & Munchies",
    "Hookah",
    "Mouth fresheners",
  ])
  
  const [cartData, setCartData] = useState([])

  const [filteredProducts, setFilteredProducts] = useState([])
  console.log(filteredProducts)

  useEffect(()=>{
    // console.log(cartData)
    
 }, [cartData])

  return (
    <ProductContext.Provider value={{productData, setProductData, bannerData, setBannerData, categories, setCategories, cartData, setCartData, filteredProducts, setFilteredProducts}}>{children}</ProductContext.Provider>
  )
}

export default Context