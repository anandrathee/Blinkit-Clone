import React, { useContext, useEffect, useState } from "react";
import { ProductContext } from "../context/Context";
import ProductCard from "../partials/ProductCard";
import { Link } from "react-router-dom";
import emptyCart from '../assets/emptyCart.png'

const Sr = () => {
  const { filteredProducts, productData } = useContext(ProductContext);
  const [localProducts, setLocalProducts] = useState(filteredProducts);

  // Sync localProducts with filteredProducts AND productData changes
  useEffect(() => {
    const updatedProducts = filteredProducts.map(fp => {
      const originalProduct = productData.find(p => p.sNo === fp.sNo);
      return originalProduct || fp;
    });
    setLocalProducts(updatedProducts);
  }, [filteredProducts, productData]);

  return (
    <div className="w-full h-auto px-14 flex flex-col gap-10 min-h-screen">
      <div className="navigator text-xs font-semibold mt-4">
        <Link to="/" className="hover:text-green-600">Home</Link> / <Link className="hover:text-green-600">Search...</Link>
      </div>
      
      <div className="flex flex-wrap items-center justify-start gap-6">
        {localProducts.length > 0 ? (
          localProducts.map((item) => (
            <ProductCard key={item.sNo} value={item} />
          ))
        ) : (
          <div className="w-full h-[60vh] flex flex-col items-center justify-center relative">
            <img className="w-96 h-96 object-contain" src={emptyCart} alt="No products" />
            <h1 className="absolute bottom-20 text-xl font-semibold text-gray-600">No product found...</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sr;
