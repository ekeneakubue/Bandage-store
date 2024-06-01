import React from 'react'
import style from './Services.module.css'

const Services = () => {
  return (
    <div className={style.services}>
        <h5>Featured Products</h5>
        <h3>THE BEST SERVICES</h3>
        <p>Problems trying to resolve the conflict between </p>
        <div className={style.grid_container}>
            <div className={style.grid_item}>
                <img src="images/services/serv1.png" alt="" />
                <h3>Easy Wins</h3>
                <p>Get your best looking smile now!</p>
            </div> 

            <div className={style.grid_item}>
                <img src="images/services/serv2.png" alt="" />
                <h3>Concrete</h3>
                <p>Defalcate is most focused in helping you discover your most beautiful smile</p>
            </div> 

            <div className={style.grid_item}>
                <img src="images/services/serv3.png" alt="" />
                <h3>Hack Growth</h3>
                <p>Overcame any hurdle or any other problem.</p>
            </div> 
        </div>       
    </div>
  )
}

export default Services