import React, { useContext } from "react";
import { ProductContext } from "../context/Context";
import ProductCard from "../partials/ProductCard";
import { Link } from "react-router-dom";
import emptyCart from '../assets/emptyCart.png'

const Sr = () => {
  const { filteredProducts } = useContext(ProductContext);
  return (
    <div className="w-full h-auto px-14 flex flex-col gap-10">
        <div className="navigator text-xs font-semibold mt-4">
            <Link to="/" className="hover:text-green-600 " >Home</Link> / <Link className="hover:text-green-600 " >Search...</Link>
        </div>
      <div className="flex flex-wrap items-center justify-start gap-6">
        {filteredProducts.length > 0
          ? filteredProducts.map((item, index) => <ProductCard value={item} />)
          : (
            <div className="w-full h-fit flex flex-col items-center justify-center relative">
                <img className="w-96 h-96" src={emptyCart} alt="" />
                <h1 className="absolute bottom-20">Search any thing...</h1>
            </div>
          )}
      </div>
    </div>
  );
};

export default Sr;
