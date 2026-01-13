import React, { useContext } from "react";
import { ProductContext } from "../context/Context";

const ProductCard = ({ value }) => {  
  const {
    title, weight, image, actualPrice, discountedPrice, discount,
    isAdded, sNo, category, qty
  } = value;

  const { setProductData, cartData, setCartData } = useContext(ProductContext);

  
  const handleAdd = () => {
    const newQty = 1;
    setProductData(prev => 
      prev.map(product => 
        product.sNo === sNo 
          ? { ...product, qty: newQty, isAdded: true }
          : product
      )
    );
    
   
    const existing = cartData.find(item => item.sNo === sNo);
    if (!existing) {
      setCartData(prev => [...prev, { ...value, qty: newQty, isAdded: true }]);
    }
  };

  // INCREMENT
  const handleIncrement = () => {
    const updatedQty = (qty || 0) + 1;
    setProductData(prev => 
      prev.map(product => 
        product.sNo === sNo 
          ? { ...product, qty: updatedQty, isAdded: true }
          : product
      )
    );
    
    setCartData(prev => 
      prev.map(item => 
        item.sNo === sNo ? { ...item, qty: updatedQty } : item
      )
    );
  };

  // DECREMENT
  const handleDecrement = () => {
    const newQty = (qty || 0) - 1;
    const shouldBeAdded = newQty > 0;
    
    setProductData(prev => 
      prev.map(product => {
        if (product.sNo === sNo) {
          return {
            ...product,
            qty: shouldBeAdded ? newQty : 0,
            isAdded: shouldBeAdded
          };
        }
        return product;
      })
    );

    if (shouldBeAdded) {
      setCartData(prev => 
        prev.map(item => 
          item.sNo === sNo ? { ...item, qty: newQty } : item
        )
      );
    } else {
      setCartData(prev => prev.filter(item => item.sNo !== sNo));
    }
  };

  const showAddButton = !isAdded || (qty || 0) === 0;

  return (
    <div className="w-46 h-70 p-2 border border-zinc-300 rounded-lg flex flex-col items-center gap-2 relative shrink-0 hover:shadow-md transition-all cursor-pointer group">
      <div className="w-full h-full flex flex-col" onClick={() => window.location.href = `/${category}/${title}`}>
        {discount > 0 && (
          <div className="discountBadge w-8 h-8 absolute top-0 rounded-b-2xl left-4 text-center text-white bg-blue-400 overflow-hidden z-10">
            <p className="text-[0.70rem] font-bold">{discount}%</p>
            <p className="text-[0.70rem] font-bold -mt-1">OFF</p>
          </div>
        )}

        <div className="img w-38 h-38">
          <img className="w-full h-full object-cover rounded" src={image} alt="" />
        </div>
        
        <div className="details w-full h-full flex flex-col items-start justify-between">
          <p className="title font-semibold text-sm line-clamp-2">{title}</p>
          <p className="weight text-xs text-zinc-600">{weight}</p>
          <div className="priceBtn w-full flex items-center justify-between">
            <div className="price text-xs font-semibold">
              <p>{discount > 0 ? discountedPrice : actualPrice}</p>
              {discount > 0 && <p className="text-zinc-600 line-through">{actualPrice}</p>}
            </div>
            
            {showAddButton ? (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAdd();  
                }}
                className="border flex items-center justify-center bg-[#f7fff9] border-green-700 w-16 h-8 rounded-md text-sm text-green-800 font-semibold hover:bg-green-50 transition-colors"
              >
                ADD
              </button>
            ) : (
              <div className="border flex items-center justify-between text-white bg-green-700 border-green-700 w-16 h-8 rounded-md text-sm font-semibold overflow-hidden">
                <button onClick={(e) => { e.stopPropagation(); handleDecrement(); }}
                  className="bg-green-700 w-5 h-full flex items-center justify-end cursor-pointer font-semibold text-2xl text-center pb-1 hover:bg-green-600"
                >-</button>
                <div className="h-full cursor-default w-5 text-center flex items-center justify-center bg-green-700 font-bold">
                  {qty || 0}
                </div>
                <button onClick={(e) => { e.stopPropagation(); handleIncrement(); }}
                  className="bg-green-700 w-5 h-full flex items-center pb-1 cursor-pointer justify-start font-semibold text-xl hover:bg-green-600"
                >+</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
