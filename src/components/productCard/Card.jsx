import React from 'react'
import { Link } from 'react-router-dom'
import style from './Card.module.css'

const Card = (props) => {
  return (  
    <Link to = './productDetails'> 
      <div className={style.card}>
          <img src={props.imageUrl} />
          <h5>{props.title}</h5>
          <p>{props.category}</p>
          <h5>
              <span>${props.price}</span>
              <span>${props.discountPercentage}</span>
          </h5>                                                 
      </div> 
    </Link>
  )
}

export default Card