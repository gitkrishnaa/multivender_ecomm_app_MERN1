import React, { useContext } from 'react'
import Styles from "./Styles.module.css";
import { Window } from '../../UI';
import {CartContextCreate} from "../../Context/index";

function Main(props) {
    let context=useContext(CartContextCreate)
    console.log(context,"jgu")
  return (
  

  <Window onCloseHandler={props.onCloseHandler}>
<div className={Styles.MainDiv}>

  </div>
  </Window>


  
  )
}

export default Main