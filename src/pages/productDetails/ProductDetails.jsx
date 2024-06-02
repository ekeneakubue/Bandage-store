import React from 'react'
import { useParams } from 'react-router-dom'
import DATA from '../Data';

const ProductDetails = () => {
  const proid = useParams();
  const proDetail = DATA.filter(x=x.id == proid)
  const product = proDetail[0];
  console.log(product);
  return (
    <div>
      <h1>
        <img src={product.img} alt="" />
        <h3>{product.title}</h3>
      </h1>
    </div>
  )
}

export default ProductDetails