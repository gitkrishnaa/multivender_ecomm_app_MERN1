import React, { useContext } from 'react'
import Styles from "./Styles.module.css";
import { Window } from '../../UI';
import {CartContextCreate} from "../../Context/index";

function Main(props) {
    let context_data=useContext(CartContextCreate)
    console.log(context_data.data,"hi")
    const data_array_keys=Object.keys(context_data.data)
    const data_obj=context_data.data
console.log(data_array_keys,data_obj,"data")
  
    return (
  

  <Window onCloseHandler={props.onCloseHandler}>
<div className={Styles.MainDiv}>
{
data_array_keys.map(e=>{
    return <div>{e}-{data_obj[e]}</div>
})
}
  </div>
  </Window>


  
  )
}

export default Main