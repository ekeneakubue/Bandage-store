import React from 'react'
import style from './HeroSection.module.css'

export default function HeroSection() {
  return (
    <div className={style.hero_container}>
        <div className={style.hero_left}>
            <h6>5 Items</h6>
            <h2>FURNITURE</h2>
            <h6>Read More</h6>
        </div>
        <div className={style.hero_right}>
            <div className={style.hero_top}>
                <h6>5 Items</h6>
                <h2>FURNITURE</h2>
                <h6>Read More</h6>
            </div>
            <div className={style.hero_bottom}>
                <div className={style.bottom_left}>
                    <h6>5 Items</h6>
                    <h2>FURNITURE</h2>
                    <h6>Read More</h6>
                </div>
                <div className={style.bottom_right}>
                    <h6>5 Items</h6>
                    <h2>FURNITURE</h2>
                    <h6>Read More</h6>
                </div>
            </div>
        </div>
    </div>
  )
}
