import React from 'react'
import Styles from "./Styles.module.css"
function Backdrop(props) {
  return (
    <div onClick={props.close_handler} className={Styles.backdrop}></div>
  )
}
function Window(props) {
  return (
    <div>
<Backdrop close_handler={props.onCloseHandler}/>

<div className={Styles.window1}>
   
<button onClick={props.onCloseHandler}>close</button>
{props.children}
</div>
    </div>
  )
}

export default Window;