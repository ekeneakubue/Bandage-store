import React from 'react'
import style from './ProductDetails.module.css'
import ProductInfo from '../../components/productInfo/ProductInfo'
import Product from '../../components/products/Product'

import { useParams, Link } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../redux/api.jsx';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';
import { Bestseller } from '../../components/bestseller/Bestseller.jsx';

const ProductDetails = () => {
  const { productId } = useParams();
  const { data, error, isLoading } = useGetProductByIdQuery(productId);
  const dispatch = useDispatch();

  if (isLoading) {
    return <div className={style.home_loader}><div className={style.loader} id='loader'>
      Bandage...</div></div>;
  }

  if (error) {
    return <div>Error fetching product details</div>;
  }

  const { id, title, category, price, thumbnail, images, description } = data;

  const handleAddToCart = () => {
    dispatch(addToCart({ id, title, imageUrl: thumbnail, imageUrl2: imageUrl2, price }));
  };


  return (
    <>     
      <div className={style.productDetails} id='productDetail'>      
        <div className={style.item_pics}>
          <img src={thumbnail} alt="title" />
          <div className={style.other_pics}>
            <img src={thumbnail} alt="" />
          </div>
        </div>
        <div className={style.item_info}>
          <h4>Floating Phone</h4>
          <p>
            <img src="/images/productdetail/stars.png" alt="" />
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
              <button onClick={handleAddToCart}>Select Options</button>
              <img src="/images/productdetail/like.png" alt="" />
              <Link to="/cart">
                <img src="/images/productdetail/basket.png" alt="" />
              </Link>
              <img src="/images/productdetail/more.png" alt="" />
            </section>
          </div>
        </div>
      </div>
      <ProductInfo/>      
      <Bestseller />
      <div className={style.foot_brand}>
        <div className={style.foot_brand_name}>Bandage</div>
        <div className={style.foot_social}>
          <img src="/images/productdetail/fb.png" alt="" />
          <img src="/images/productdetail/ig.png" alt="" />
          <img src="/images/productdetail/x.png" alt="" />
        </div>
      </div>      
    </>
  )
}

export default ProductDetails