import React, { useContext } from 'react'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Product = () => {
  const {products} = useContext(ShopContext);
  const {productId} = useParams();
  const product = products.find((e)=>e.id === Number(productId));
  return (
    <div>
      <div className="ob h-40 w-full bg-primary-multiply-color"></div>
      {product && <ProductDisplay product={product}/>}
    </div>
  )
}

export default Product
