import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router-dom'  
import { ProductContext } from '../context/Context'

const ItemDetails = () => {
  const { category, title } = useParams()
  const navigate = useNavigate()
  const { productData } = useContext(ProductContext)
  
  const product = productData.find(p => 
    p.category.toLowerCase() === category?.toLowerCase() && 
    p.title.toLowerCase() === title?.toLowerCase()
  )

  if (!product) return <div className="p-4">Product not found</div>

  return (
    <div className="p-6 max-w-md mx-auto">
      <button 
        onClick={() => navigate(-1)} 
        className="mb-6 text-green-800 font-semibold flex items-center gap-2"
      >
        ← Back to Shopping
      </button>
      
      <img src={product.image} alt={product.title} className="w-full h-64 object-cover rounded-lg mb-4" />
      
      <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
      <p className="text-zinc-600 mb-4">{product.weight}</p>
      
      <div className="price-section mb-6">
        <p className="text-3xl font-bold text-green-800">
          {product.discount > 0 ? product.discountedPrice : product.actualPrice}
        </p>
        {product.discount > 0 && (
          <>
            <p className="text-zinc-600 line-through text-lg">{product.actualPrice}</p>
            <p className="text-blue-500 font-semibold">{product.discount}% OFF</p>
          </>
        )}
      </div>
      
      <button className="w-full bg-green-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-800">
        ADD TO CART
      </button>
    </div>
  )
}

export default ItemDetails
