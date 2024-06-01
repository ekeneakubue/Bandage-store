import React, { useState } from 'react'
import style from './Home.module.css'
import HeroSection from '../../components/heroSection/HeroSection'
import { useGetProductsQuery } from '../../redux/api';
import Card from '../../components/productCard/Card';
import Services from '../../components/services/Services';
import Features from '../../components/features/Features';

const Home = () => {

  const { data, error, isLoading } = useGetProductsQuery();
  const [visibleCount, setVisibleCount] = useState(10);

  if (isLoading) {
    return <div className={style.loader} id='loader'>Bandage...</div>;
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
      {/* Hero Section */}
      <section>
        <HeroSection />
      </section>
      
      {/* Products Section */}
      <section>
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
      </section> 

      {/*Services Section  */}
      <section>
        <Services />
      </section>

      {/*Features Section  */}
      <section>
        <Features />
      </section>
    </div>
  )
}

export default Home