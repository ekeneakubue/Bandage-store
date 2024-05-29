import React from 'react'
import style from './Navbar.module.css'
import TopNavbar from './TopNavbar'

export default function Navbar() {
  return (
    <>
        <div className={style.topNavbar}>
            <TopNavbar />
        </div>
        <div className={style.downNavbar}>
            <div className={style.left}>
              <h3>Bandage</h3>
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
              <div className={style.follow}>
                <h6><img src="images/downnav/user-icon.png" alt="user" />Login / Register</h6>
                <img src="images/downnav/search-icon.png" alt="search" />
                <img src="images/downnav/cart-icon.png" alt="cart" />
                <img src="images/downnav/like-icon.png" alt="like" />
              </div>
            </div>
        </div>
    </>
  )
}
