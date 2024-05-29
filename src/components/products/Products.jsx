import React from 'react'
import style from './Products.module.css'
import { products } from './Data'

export default function Products() {
  return (
    <div className={style.products}> 
        <h4>Featured Products</h4>    
        <h3>BESTSELLER PRODUCTS</h3>  
        <p>Problems trying to resolve the conflict between </p>
        <div className={style.product_cards}>
            {
                products.map((item) => 
                <div className={style.card_body} >
                    <img src={item.img} alt="" />
                    <p>{item.dept}</p>
                    <h5>
                        <span>${item.old_rice}</span>
                        <span>${item.new_price}</span>
                    </h5>                
                </div>                               
                )
            }  
        </div>
        <button>LOAD MORE PRODUCTS</button>
    </div>
  )
}
