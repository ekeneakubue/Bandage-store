import React from 'react'
import style from './ProductInfo.module.css'

const ProductInfo = () => {
  return (
    <div className={style.Productinfo}>
        <div className={style.info_navbar}>
            <div className={style.info_nav_item}>Description</div>
            <div className={style.info_nav_item}>Additional Information</div>
            <div className={style.info_nav_item}>Reviews (0)</div>
        </div>
        <div className={style.info_container}>
            <div className={style.info_item}>
                <h5>the quick fox jumps over </h5>
                <p>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
                    RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
                    consequent sent nostrum met.
                </p>
                <p className={style.p_border}>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. 
                    RELIT official consequent door ENIM RELIT Mollie. Excitation venial 
                    consequent sent nostrum met.
                </p>
                <p>
                    Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT 
                    official consequent door ENIM RELIT Mollie. Excitation venial consequent 
                    sent nostrum met.
                </p>
            </div>
            <div className={style.info_img}>
                <img src="/images/productdetail/desc.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default ProductInfo