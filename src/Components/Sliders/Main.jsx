import React from 'react'
import { sliderImg1 } from '../../Assets'
import Styles from "./Styles.module.css"
function Main() {
  // alert(window.innerWidth)
  return (
    <div className={Styles.main_div}>
<img  className={Styles.img1} src={sliderImg1} alt="" />


    </div>
  )
}

export default Main