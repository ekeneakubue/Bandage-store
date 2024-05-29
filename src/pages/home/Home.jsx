import React from 'react'
import Navbar from '../../components/navbar/Navbar'

import HeroSection from '../../components/heroSection/HeroSection'

export default function Home() {
  return (
    <div>
        <header>
            <Navbar/>   
        </header>
        <main>
            <HeroSection />
        </main>
        
    </div>
  )
}
