import React from 'react'
import style from './ProductDetails.module.css'
import Navbar2 from '../../components/navbar2/Navbar2'

// import { useParams } from 'react-router-dom'

const ProductDetails = () => {
  // const proid = useParams();
  // const proDetail = DATA.filter(x=x.id == proid)
  // const product = proDetail[0];
  // console.log(product);
  return (
    <>
      {/* Nvbar Section */}
      <header>
        <Navbar2/>
      </header>
      <div className={style.productDetails}>      
        <div className={style.item_pics}>
          <img src="images/productdetail/pd1.png" alt="" />
          <div className={style.other_pics}>
            <img src="images/productdetail/pd2.png" alt="" />
            <img src="images/productdetail/pd3.png" alt="" />
          </div>
        </div>
        <div className={style.item_info}>
          <h4>Floating Phone</h4>
          <p>
            <img src="images/productdetail/stars.png" alt="" />
            <span>10 Reviews</span>
            <h3>$1,139.33</h3>            
          </p>
          <div>Availability: <span>In Stock</span></div>
          <div className={style.attributre}>
            <hr />
            <div className={style.colors}>
              <span className={style.color1}></span>
              <span className={style.color2}></span>
              <span className={style.color3}></span>
              <span className={style.color4}></span>              
            </div>
            <section>
              <button>Select Options</button>
              <img src="images/productdetail/like.png" alt="" />
              <img src="images/productdetail/basket.png" alt="" />
              <img src="images/productdetail/more.png" alt="" />
            </section>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetails