import React from 'react'
import style from './HeroSection.module.css'

export default function HeroSection() {
    return (
        <div className={style.hero_container}>
            <div className={`${style.hero_item1} ${style.hero_item}`}>
                <h6>5 Items</h6>
                <h2>FURNITURE</h2>
                <h6>Read More</h6>
            </div>        
            <div className={`${style.hero_item2} ${style.hero_item}`}>
                <h6>5 Items</h6>
                <h2>FURNITURE</h2>
                <h6>Read More</h6>
            </div>            
            <div className={`${style.hero_item3} ${style.hero_item}`}>
                <h6>5 Items</h6>
                <h2>FURNITURE</h2>
                <h6>Read More</h6>
            </div>
            <div className={`${style.hero_item4} ${style.hero_item}`}>
                <h6>5 Items</h6>
                <h2>FURNITURE</h2>
                <h6>Read More</h6>
            </div>
        </div>      
    )
}
