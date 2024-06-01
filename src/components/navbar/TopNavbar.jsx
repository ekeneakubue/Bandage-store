import React from 'react'
import style from './Navbar.module.css'

const TopNavbar = () => {
    return (
        <>
            <div className={style.top_navbar}>
                <div className={style.left}>
                    <h6><img src="images/topnav/phone-icon.png" alt="" />(225) 555-0118</h6>
                    <h6><img src="images/topnav/email-icon.png" alt="" />michelle.rivera@example.com</h6>
                </div>
                <div className={style.right}>
                    <p>Follow Us  and get a chance to win 80% off</p>
                    <div className={style.socials}>
                        <p>Follow Us :</p>
                        <img src="images/topnav/instagram-icon.png" alt="" />
                        <img src="images/topnav/play-icon.png" alt="" />
                        <img src="images/topnav/facebook-icon.png" alt="" />
                        <img src="images/topnav/twitter-icon.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNavbar