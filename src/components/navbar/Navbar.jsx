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
            hhh
        </div>
    </>
  )
}
