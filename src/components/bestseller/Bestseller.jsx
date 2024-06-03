import React from 'react'
import style from './Bestseller.module.css'
import { bestseller } from './Data'

export const Bestseller = () => {
  return (
    <div className={style.bestseller}>
        <div className={style.bestseller_title}>
            <h3>BESTSELLER PRODUCTS</h3>
        </div>
        <div className={style.bestseller_container}>            
          {
            bestseller.map((item) =>                               
              <div className={style.card}>
                <img src={item.image} />
                <h5>{item.title}</h5>
                <p>{item.category}</p>
                <h5>
                    <span>${item.price}</span>
                    <span>${item.discountPercentage}</span>
                </h5>                                                 
              </div>                                            
            )
          }      
        </div>
        <div className={style.brand_icons}>
          <img src="images/bestseller/fa-brands-1.png" alt="" />
          <img src="images/bestseller/fa-brands-2.png" alt="" />
          <img src="images/bestseller/fa-brands-3.png" alt="" />
          <img src="images/bestseller/fa-brands-4.png" alt="" />
          <img src="images/bestseller/fa-brands-5.png" alt="" />
          <img src="images/bestseller/fa-brands-6.png" alt="" />
        </div>
    </div>
  )
}
