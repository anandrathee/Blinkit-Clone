import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductContext } from "../context/Context";

const ItemDetails = () => {
  const { category, title } = useParams();
  const { productData, setProductData, cartData, setCartData } = useContext(ProductContext);

  const product = productData.find(
    (p) =>
      p.category.toLowerCase() === category?.toLowerCase() &&
      p.title.toLowerCase() === title?.toLowerCase()
  );

  if (!product) return <div className="p-4">Product not found</div>;

  const handleIncrement = () => {
    const sNo = product.sNo;
    const newQty = (product.qty || 0) + 1;
    
    setProductData(prev => 
      prev.map(item => 
        item.sNo === sNo 
          ? { ...item, qty: newQty, isAdded: true }
          : item
      )
    );

    setCartData(prev => 
      prev.map(item => 
        item.sNo === sNo 
          ? { ...item, qty: newQty }
          : item
      )
    );
  };

  const handleDecrement = () => {
    const sNo = product.sNo;
    const newQty = (product.qty || 0) - 1;
    
    if (newQty > 0) {
      // Update qty
      setProductData(prev => 
        prev.map(item => 
          item.sNo === sNo 
            ? { ...item, qty: newQty, isAdded: true }
            : item
        )
      );
      
      setCartData(prev => 
        prev.map(item => 
          item.sNo === sNo 
            ? { ...item, qty: newQty }
            : item
        )
      );
    } else {
      // Remove completely
      setProductData(prev => 
        prev.map(item => 
          item.sNo === sNo 
            ? { ...item, qty: 0, isAdded: false }
            : item
        )
      );
      
      setCartData(prev => prev.filter(item => item.sNo !== sNo));
    }
  };

  const handleAddToCart = () => {
    const sNo = product.sNo;
    
    setProductData(prev => 
      prev.map(item => 
        item.sNo === sNo 
          ? { ...item, qty: 1, isAdded: true }
          : item
      )
    );

    setCartData(prev => {
      const existing = prev.find(item => item.sNo === sNo);
      if (existing) {
        return prev.map(item => 
          item.sNo === sNo ? { ...item, qty: 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const displayPrice = product.discount > 0 ? product.discountedPrice : product.actualPrice;
  const isAdded = product.isAdded || false;
  const currentQty = product.qty || 0;
  const showQtyControls = isAdded && currentQty > 0;

  return (
    <div className="itemDetials w-full h-screen flex items-center justify-end px-12 gap-6">
      <div className="left w-full">
        <img className="w-[80%] h-full" src={product.image} alt="" />
      </div>

      <div className="line h-[90%] border border-gray-100"></div>

      <div className="rightContainer w-full bg-white rounded-lg flex flex-col gap-2 p-6">
        {/* Breadcrumb */}
        <div className="flex items-center text-zinc-800 text-xs font-medium py-0.5 rounded space-x-1">
          <Link to="/" className="hover:underline">Home</Link>
          <span>/</span>
          <span>{category}</span>
        </div>

        <div className="flex items-center">
          <h2 className="text-xl font-bold text-gray-900 flex-1">
            {product.title}
          </h2>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex space-x-3"></div>

          <div className="flex items-end justify-between">
            <div className="price text-xs font-semibold flex flex-col items-start gap-2">
              <p className="text-gray-700 text-sm">{product.weight}</p>
              <div className="flex items-center gap-4">
                <p className="text-xl font-medium bg-slate-300 w-fit py-1 mt-1 rounded-md px-3">
                  {displayPrice}
                </p>
                <p className="text-zinc-600 line-through text-xl">
                  {product.discount > 0 ? product.actualPrice : ""}
                </p>
              </div>
              <div className="text-xs text-gray-500">(incl. of taxes)</div>
            </div>
            
            {showQtyControls ? (
              <div className="flex items-center bg-green-100 border-2 border-green-300 text-green-800 rounded-xl p-3 gap-3 shadow-sm">
                <button 
                  onClick={handleDecrement}
                  className="w-10 h-10 bg-white border-2 border-green-400 rounded-lg flex items-center justify-center text-green-600 font-bold text-xl hover:bg-green-50 transition-all duration-200 shadow-sm"
                >
                  −
                </button>
                <span className="font-bold text-2xl min-w-[2rem] text-center">{currentQty}</span>
                <button 
                  onClick={handleIncrement}
                  className="w-10 h-10 bg-green-500 border-2 border-green-500 rounded-lg flex items-center justify-center text-white font-bold text-xl hover:bg-green-600 transition-all duration-200 shadow-md hover:shadow-lg"
                >
                  +
                </button>
              </div>
            ) : (
              <button 
                onClick={handleAddToCart}
                className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-xl transition-all duration-200 text-sm font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Add to cart
              </button>
            )}
          </div>
        </div>

        {/* Why shop Blinkit */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            Why shop Blinkit
          </h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <img
                  className="w-full h-full"
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png"
                  alt=""
                />
              </div>
              <span>
                Round The Clock Delivery from dark stores near you, whenever you
                need them at your doorstep.
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <img
                  className="w-full h-full"
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png"
                  alt=""
                />
              </div>
              <span>
                Best Prices & Offers with offers directly from the
                manufacturers.
              </span>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mt-0.5">
                <img
                  className="w-full h-full"
                  src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png"
                  alt=""
                />
              </div>
              <span>
                Wide Assortment choose from 30,000+ products across food,
                personal care, household & other.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
