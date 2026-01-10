import React, { useContext } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../partials/ProductCard";
import ProductCategories from "../partials/ProductCategories";
import { ProductContext } from "../context/Context";

const Products = () => {
 const {categories} =   useContext(ProductContext)
  return (
    
      <>
        {categories.map((item,index) => (
          <div key={index} className="flex flex-col">
            <div className="top flex w-full justify-between mt-6">
              <h1 className="text-xl font-semibold">{item}</h1>
              <Link className="text-green-800 font-semibold">See all</Link>
            </div>
            <div className="bottom">
              <ProductCategories item={item} />
            </div>
          </div>
        ))}6
      </>
  
  );
};

export default Products;
