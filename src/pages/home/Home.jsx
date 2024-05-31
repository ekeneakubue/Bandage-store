import React, { useState } from 'react'
import style from './Home.module.css'
import HeroSection from '../../components/heroSection/HeroSection'
import { useGetProductsQuery } from '../../redux/api';
import Card from '../../components/productCard/Card';

export default function Home() {

  const { data, error, isLoading } = useGetProductsQuery();
  const [visibleCount, setVisibleCount] = useState(10);

  if (isLoading) {
    return <div>Loading...</div>;
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
      imageUrl={item.thumbnail}
      title={item.title}
      category={item.category}
      price={item.price}
      discountPercentage={item.discountPercentage}
    />
  ));

  return (           
    <div className={style.home}>
      <HeroSection />
      <div className={style.products}> 
        <h4>Featured Products</h4>    
        <h3>BESTSELLER PRODUCTS</h3>  
        <p>Problems trying to resolve the conflict between </p>            
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
      </div>   
    </div>
  )
}
