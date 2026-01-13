import React, { createContext, useEffect, useState } from "react";
import { productItems, bannerItems } from "../Data/ProductsData";
// import {bData} from '../Data/BannerData'

export const ProductContext = createContext();

const Context = ({ children }) => {
  const [bannerData, setBannerData] = useState(bannerItems);

  const [productData, setProductData] = useState(productItems);

  const [categories, setCategories] = useState([
    "Dairy, Bread & Eggs",
    "Rolling paper & tobacco",
    "Snacks & Munchies",
    "Hookah",
    "Mouth fresheners",
  ]);

  const [cartData, setCartData] = useState([]);

  const [filteredProducts, setFilteredProducts] = useState([]);
  console.log(cartData);

  const [isCartActive, setIsCartActive] = useState(false);

  const [updateQty, setUpdateQty] = useState(null)

  console.log(updateQty)

  


  return (
    <ProductContext.Provider
      value={{
        productData,
        setProductData,
        bannerData,
        setBannerData,
        categories,
        setCategories,
        cartData,
        setCartData,
        filteredProducts,
        setFilteredProducts,
        isCartActive,
        setIsCartActive,
        updateQty, 
        setUpdateQty,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default Context;
