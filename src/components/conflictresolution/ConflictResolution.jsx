import React from 'react'
import style from './ConflictResolution.module.css'

const ConflictResolution = () => {
  return (
    <>
      <div className={style.conflict_container}>
        <h6>Designing Better Experience</h6>
        <h2>Problems trying to resolve the conflict between </h2>
        <p>
            Problems trying to resolve the conflict between the 
            two major realms of Classical physics: 
        </p>
        <h3>$16.48</h3>
        <button>ADD YOUR CALL TO ACTION</button>        
      </div>
      <div className={style.foot_brand_section}>
        <h3>Bandage</h3>
        <div className={style.foot_social}>
            <img src="images/footer/fb.png" alt="" />
            <img src="images/footer/ig.png" alt="" />
            <img src="images/footer/x.png" alt="" />
        </div>
      </div>
    </>
  )
}

export default ConflictResolution