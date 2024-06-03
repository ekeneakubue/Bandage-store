import React, { useState } from 'react'
import style from './Product.module.css'
import { useGetProductsQuery } from '../../redux/api';
import Card from '../../components/productCard/Card';

const Product = () => {

const { data, error, isLoading } = useGetProductsQuery();
const [visibleCount, setVisibleCount] = useState(10);

  if (isLoading) {
    return <div className={style.home_loader}><div className={style.loader} id='loader'>
      Bandage...</div></div>;
  }

  if (error) {
    return <div>Error fetching data</div>;
  }

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  const displayedItems = data.products.slice(0, visibleCount).map((item) => (
    <Card
      key={item.id}
      id={item.id} // Add product id prop
      imageUrl={item.thumbnail}
      imageUrl2={item.images}
      title={item.title}
      category={item.category}
      price={item.price}
      discountPercentage={item.discountPercentage}
    />
  ));

  return ( 
    <>   
        <div className={style.product_cards}>              
            {displayedItems}  
        </div>
        {
            visibleCount < data.products.length && (
            <button onClick={handleLoadMore} className={style.pro_button}>
            LOAD MORE PRODUCTS
            </button>
            )
        } 
        
    </>
  )
}

export default Product