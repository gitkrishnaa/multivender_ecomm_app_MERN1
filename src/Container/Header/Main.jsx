import React from 'react'
import { Navbar,Sliders } from '../../Components'

function Main(props) {
  return (
    <div style={{width:"100"}}>
      <Navbar onclick_open_cart_window={props.onclick_open_cart_window}/>
    
    <Sliders/>
    </div>
   
  )
}

export default Main