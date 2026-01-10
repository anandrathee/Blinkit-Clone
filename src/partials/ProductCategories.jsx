import React, { useContext }  from 'react'
import { ProductContext } from '../context/Context'
import ProductCard from './ProductCard'


const ProductCategories = ({item}) => {
  // console.log(item.toLowerCase())
     const {productData, setProductData, setCartData} = useContext(ProductContext)

     const filteredData = productData.filter(elem => elem.category.toLowerCase() === item.toLowerCase())
    //  console.log(filteredData)

    const handleBtn = (sNo) => {
    setProductData(prev => 
      prev.map((product) => {
        if (product.sNo === sNo) {  // ✅ sNo match
          const updatedItem = { ...product, isAdded: !product.isAdded }
          
          if (updatedItem.isAdded) {
            // Add to cart
            setCartData(prev => [...prev, updatedItem])
          } else {
            // Remove from cart
            setCartData(prev => prev.filter(cartItem => cartItem.sNo !== sNo))
          }
          
          return updatedItem
        }
        return product
      })
    )
  }

  return (
    <div className='productCat flex gap-4 items-center justify-start mt-5 overflow-x-auto'>
         {
      filteredData.map((item,index)=>(
        <ProductCard key={index} value={item} handleBtn={handleBtn}/>
      ))
    }
    </div>
  )
}

export default ProductCategories