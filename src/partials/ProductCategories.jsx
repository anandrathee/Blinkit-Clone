import React, { useContext }  from 'react'
import { ProductContext } from '../context/Context'
import ProductCard from './ProductCard'


const ProductCategories = ({item}) => {
  // console.log(item.toLowerCase())
     const {productData} = useContext(ProductContext)

     const filteredData = productData.filter(elem => elem.category.toLowerCase() === item.toLowerCase())
    //  console.log(filteredData)

  return (
    <div className='productCat flex gap-4 items-center justify-start mt-5 overflow-x-auto'>
         {
      filteredData.map((item,index)=>(
        <ProductCard key={index} value={item}/>
      ))
    }
    </div>
  )
}

export default ProductCategories