import React, { createContext, useState } from 'react'
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
  return (
    <ProductContext.Provider value={{productData, setProductData, bannerData, setBannerData, categories, setCategories}}>{children}</ProductContext.Provider>
  )
}

export default Context