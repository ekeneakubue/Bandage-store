import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import HeroSection from '../../components/heroSection/HeroSection'
import Products from '../../components/products/Products'

export default function Home() {
  return (
    <div>
        <header>
            <Navbar/>   
        </header>
        <main>
            <HeroSection />
            <Products/>
        </main>
        
    </div>
  )
}
