import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar2.module.css'
import TopNavbar2 from './TopNavbar2'

const Navbar2 = () => {
  return (
    <>
      <TopNavbar2/>      
      <div className={style.downNavbar}>
          <div className={style.left}>
            <h3><Link to = '/'>Bandage</Link></h3>
          </div>
          <div className={style.right}>
            <div className={style.navs}>
              <ul>
                <li>Home</li>
                <li>Shop</li>
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
                <li>Pages</li>
              </ul>
            </div>
            <div className={style.navbar_btns}>
              <h6><img src="images/downnav/user-icon.png" alt="user" />Login / Register</h6>
              <div>
                <img src="images/downnav/search-icon.png" alt="search" />
              </div>
              <div>
                <img src="images/downnav/cart-icon.png" alt="cart" /><sup>1</sup>
              </div>
              <div>
                <img src="images/downnav/like-icon.png" alt="like" /><sup>1</sup>
              </div>
            </div>
          </div>
      </div>
    </>
  )
}

export default Navbar2