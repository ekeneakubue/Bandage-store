import React from 'react'
import { Link } from 'react-router-dom'
import style from './Card.module.css'

const Card = ({ id, title, category, price, discountPercentage, imageUrl }) => {
  
  return (  
    <Link to = {`./product/${id}`} id='productDetail'> 
      <div className={style.card}>
          <img src={imageUrl} />
          <h5>{title}</h5>
          <p>{category}</p>
          <h5>
              <span>${price}</span>
              <span>${discountPercentage}</span>
          </h5>                                                 
      </div> 
    </Link>
  )
}

export default Card