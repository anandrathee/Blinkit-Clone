import React, { createContext, useState } from 'react'
import {productItems, bannerItems} from '../Data/ProductsData'
// import {bData} from '../Data/BannerData'


export const ProductContext = createContext();

const Context = ({children}) => {
    const [bannerData, setBannerData] = useState(bannerItems);


    const [productData, setProductData] = useState(productItems);
  return (
    <ProductContext.Provider value={{productData, setProductData, bannerData, setBannerData}}>{children}</ProductContext.Provider>
  )
}

export default Context