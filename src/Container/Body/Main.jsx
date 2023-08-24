import React from 'react'
import { Products_component } from '../../Components'
import CartContext from "../../Context/cart/Context_provider"

function Main(props) {
  return (
    <CartContext>
    <div style={{width:"100&"}}>
    <Products_component />




   


    </div>
    </CartContext>
  )
}

export default Main