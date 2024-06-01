import React from 'react'
import style from './Feedback.module.css'

const Feedback = () => {
  return (
    <div className={style.feedback}>
        <div className={style.feedback_container}>
            <div className={style.feedback_item1}> 
                <h3>What they say about us</h3>
                <img src="images/feedback/feed-user.png" alt="" />
                <img src="images/feedback/stars.png" alt="" />
                <h6>
                    Slate helps you see how many more days you need to work 
                    to reach your financial goal.
                </h6>
                <div className={style.reviewer}>
                    <p>Regina Miles</p>
                    <h6>Designer</h6>
                </div>
            </div>
            <div className={style.feedback_item2}>
                <div className={style.image_container}>
                    <div className={style.img_item}>
                        <img src="images/feedback/feed1.png" alt="" />
                    </div>
                    <div className={style.img_item}>
                        <img src="images/feedback/feed2.png" alt="" />
                    </div>
                    <div className={style.img_item}>
                        <img src="images/feedback/feed3.png" alt="" />
                    </div>
                    <div className={style.img_item}>
                        <img src="images/feedback/feed4.png" alt="" />
                    </div>
                    <div className={style.img_item}>
                        <img src="images/feedback/feed5.png" alt="" />
                    </div>
                    <div className={style.img_item}>
                        <img src="images/feedback/feed6.png" alt="" />
                    </div>
                    <div className={style.img_item}>
                        <img src="images/feedback/feed7.png" alt="" />
                    </div>
                    <div className={style.img_item}>
                        <img src="images/feedback/feed8.png" alt="" />
                    </div>
                    <div className={style.img_item}>   
                        <img src="images/feedback/feed9.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feedback