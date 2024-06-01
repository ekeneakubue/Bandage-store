import React from 'react'
import style from './Features.module.css'

const Features = () => {
  return (
    <div className={style.features}>
        <div className={style.feat_header}>
          <h6>Practice Advice</h6>
          <h2>Featured Posts</h2>
        </div>
        <div className={style.feat_container}>
          <div className={style.feat_item}>
            <div className={style.item_hero}>              
              <img src="images/featured/featured1.png" alt="" />  
              <span>NEW</span>
            </div>
          </div>

          <div className={style.feat_item}>
            <div className={style.item_hero}>
              <img src="images/featured/featured2.png" alt="" /> 
              <span>NEW</span>
            </div>            
          </div>

          <div className={style.feat_item}>
            <div className={style.item_hero}>
              <img src="images/featured/featured3.png" alt="" />
              <span>NEW</span>
            </div>            
          </div>          
        </div>
    </div>
  )
}

export default Features