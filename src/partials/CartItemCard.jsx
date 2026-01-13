import React, { useContext } from 'react'
import { LuMinus } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import { ProductContext } from '../context/Context';

const CartItemCard = ({value}) => {
  const { setProductData, cartData, setCartData } = useContext(ProductContext);

  // INCREMENT HANDLER
  const handleIncrement = () => {
    setProductData(prev => 
      prev.map(product => 
        product.sNo === value.sNo 
          ? { ...product, qty: (product.qty || 0) + 1 }
          : product
      )
    );
    
    setCartData(prev => 
      prev.map(item => 
        item.sNo === value.sNo 
          ? { ...item, qty: (item.qty || 0) + 1 }
          : item
      )
    );
  };

  // DECREMENT HANDLER
  const handleDecrement = () => {
    if ((value.qty || 0) > 0) {
      setProductData(prev => 
        prev.map(product => 
          product.sNo === value.sNo 
            ? { ...product, qty: Math.max(0, (product.qty || 0) - 1) }
            : product
        )
      );
      
      setCartData(prev => {
        const updatedCart = prev.map(item => 
          item.sNo === value.sNo 
            ? { ...item, qty: Math.max(0, (item.qty || 0) - 1) }
            : item
        );
        // Remove if qty becomes 0
        return updatedCart.filter(item => item.qty > 0);
      });
    }
  };

  //  REMOVE FROM CART
  const handleRemove = () => {
    setProductData(prev => 
      prev.map(product => 
        product.sNo === value.sNo 
          ? { ...product, qty: 0, isAdded: false }
          : product
      )
    );
    
    setCartData(prev => prev.filter(item => item.sNo !== value.sNo));
  };

  const currentQty = value.qty || 0;
  const displayPrice = value.discount > 0 ? value.discountedPrice : value.actualPrice;

  return (
    <div className="flex items-center space-x-4 p-4 border border-gray-100 rounded-lg hover:shadow-md transition-all bg-white">
      {/* PRODUCT IMAGE */}
      <div className="shrink-0">
        <img
          src={value.image}
          alt={value.title}
          className="w-16 h-16 rounded-lg object-cover"
        />
      </div>

      {/* PRODUCT DETAILS */}
      <div className="flex-1 min-w-0">
        <div className="products">
          <p className="text-sm font-semibold text-gray-900 line-clamp-2 mb-1">
            {value.title}
          </p>
          <p className="text-xs text-gray-500 mb-2">
            {value.weight}
          </p>
          
          {/* PRICE */}
          <div className="price text-sm font-bold text-gray-900 flex items-center gap-2">
            <span>{displayPrice}</span>
            {value.discount > 0 && (
              <span className="text-xs text-gray-400 line-through">
                {value.actualPrice}
              </span>
            )}
          </div>

          {/* TOTAL PRICE */}
          <p className="text-sm font-semibold text-green-600 mt-1">
            Total: {(currentQty * parseFloat(displayPrice.replace('₹', '')) || 0).toFixed(2)}
          </p>
        </div>
      </div>

      {/* QUANTITY CONTROLS */}
      <div className="flex flex-col items-center gap-2">

        {/* QTY CONTROLS */}
        <div className=" w-16 h-8 border-green-700 bg-green-700 flex items-center justify-between  rounded-md overflow-hidden">
          <button
            onClick={handleDecrement}
            disabled={currentQty === 0}
            className="bg-green-700 w-5 h-full flex items-center justify-end cursor-pointer font-semibold text-2xl text-center pb-1 hover:bg-green-600 text-white"
          >
           -
          </button>
          
          <div className="h-full cursor-default w-5 text-center flex items-center justify-center bg-green-700 font-bold text-white">
            {currentQty}
          </div>
          
          <button
            onClick={handleIncrement}
            className="bg-green-700 w-5 h-full flex items-center pb-1 cursor-pointer justify-start font-semibold text-xl hover:bg-green-600 text-white"
          >
            +
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItemCard
