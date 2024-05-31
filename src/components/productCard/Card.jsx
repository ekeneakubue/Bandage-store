import React from 'react'
import style from './Card.module.css'

export default function Card(props) {
  return (    
    <div className={style.card}>
        <img src={props.imageUrl} />
        <h5>{props.title}</h5>
        <p>{props.category}</p>
        <h5>
            <span>${props.price}</span>
            <span>${props.discountPercentage}</span>
        </h5>                                                 
    </div> 
  )
}
