import React, { useContext, useEffect, useMemo } from "react";
import { ProductContext } from "../context/Context";
import CartItemCard from "../partials/CartItemCard";

const Cart = () => {
  const { setIsCartActive, cartData, setCartData } = useContext(ProductContext);
  
  //  TOTAL CALCULATION
  const subtotal = useMemo(() => {
    return cartData.reduce((sum, item) => {
      const priceStr = item.discount > 0 ? item.discountedPrice : item.actualPrice;
      const price = parseFloat(priceStr.replace('₹', '').replace(/,/g, '')) || 0;
      return sum + (price * (item.qty || 1));
    }, 0);
  }, [cartData]);

  const deliveryFee = 0;        
  const platformFee = 5;
  const gst = (subtotal * 0.05).toFixed(2);  // 5% GST
  const total = subtotal + parseFloat(gst) + platformFee + deliveryFee;
  
  const totalQty = cartData.reduce((total, item) => total + (item.qty || 1), 0);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('en-IN', { 
      style: 'currency', 
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0 
    }).format(amount);
  };

  return (
    <div className="cartPage flex w-full h-screen">
      <div
        onClick={() => setIsCartActive(false)}
        className="left w-[75%] h-full bg-zinc-800/70"
      />

      <div className="right w-[25%] h-full bg-white flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 shrink-0">
          <div className="flex items-center justify-between pb-4 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 3.5A2 2 0 005.4 18H16a2 2 0 001.6-3.5L17 13m0 0a2 2 0 012 2v1a2 2 0 01-2 2H9a2 2 0 00-2 2v.5a1 1 0 001 1h10"/>
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">My Cart</h2>
                <p className="text-sm text-gray-500">
                  {totalQty} items ({cartData.length} types)
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCartActive(false)}
              className="text-sm text-orange-600 font-medium hover:text-orange-700"
            >
              Close
            </button>
          </div>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-hidden flex flex-col">
          <div className="cartScroll space-y-4 p-6 overflow-y-auto flex-1">
            {cartData.length > 0 ? (
              cartData.map((item) => (
                <CartItemCard key={item.sNo} value={item} />
              ))
            ) : (
              <div className="text-center py-12 text-gray-500">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 3.5A2 2 0 005.4 18H16a2 2 0 001.6-3.5L17 13m0 0a2 2 0 012 2v1a2 2 0 01-2 2H9a2 2 0 00-2 2v.5a1 1 0 001 1h10"/>
                  </svg>
                </div>
                <p className="text-lg font-medium">Your cart is empty</p>
                <p className="text-sm">Add items to get started</p>
              </div>
            )}
          </div>
        </div>

        {/* Bottom Summary - WITH FREE DELIVERY */}
        <div className="p-6 border-t border-gray-200 shrink-0 bg-white">
          <div className="space-y-2 mb-6 p-4 bg-gray-50 rounded-xl border">
            <div className="flex justify-between text-sm font-medium">
              <span>Items Total ({totalQty})</span>
              <span className="text-green-600 font-bold">{formatPrice(subtotal)}</span>
            </div>
            <div className="flex justify-between text-sm text-green-600 font-medium">
              <span>Delivery</span>
              <span>🆓 FREE</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>GST (5%)</span>
              <span className="font-medium">₹{gst}</span>
            </div>
            <div className="flex justify-between text-sm text-gray-600">
              <span>Platform Fee</span>
              <span className="font-medium">₹{platformFee}</span>
            </div>
            <div className="border-t border-gray-200 pt-3 mt-2">
              <div className="flex justify-between text-xl font-bold text-gray-900">
                <span>Total</span>
                <span className="text-green-600 text-2xl font-extrabold">{formatPrice(total)}</span>
              </div>
            </div>
          </div>

          {/* Checkout Button */}
          {cartData.length > 0 ? (
            <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-6 rounded-2xl transition-all duration-200 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-lg border-0">
              <span>Total </span>
              <span className="text-green-200">{formatPrice(total)}</span>
            </button>
          ) : (
            <button 
              onClick={() => setIsCartActive(false)}
              className="w-full bg-gray-400 hover:bg-gray-500 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg"
            >
              Continue Shopping
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
