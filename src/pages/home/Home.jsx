import React, { useState } from 'react'
import style from './Home.module.css'
import HeroSection from '../../components/heroSection/HeroSection'
import Services from '../../components/services/Services';
import Features from '../../components/features/Features';
import Feedback from '../../components/feedback/Feedback';
import ConflictResolution from '../../components/conflictresolution/ConflictResolution';
import { useGetProductsQuery } from '../../redux/api';
import Product from '../../components/products/Product';




const Home = () => {
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
          <Product/>          
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

      {/*Feedback Section  */}
      <section>
        <Feedback />
      </section>

      {/*Conflict Resolution Section  */}
      <section>
        <ConflictResolution />
      </section>
    </div>
  )
}

export default Home