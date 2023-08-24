import logo from './logo.svg';
import './App.css';
import { Header,Body,Footer } from './Container';
import { Cart_window, Products_component } from './Components';
import { useState } from 'react';
import {Context_provider} from './Context/cart/Context_provider';

function App() {
  const [modal,setModal]=useState(false)

const closeModal_cart_handler=()=>{
setModal(false)
}
const openModal_cart_handler=()=>{
  setModal(true)
  }

  return (

   <div className="main">
<Header onclick_open_cart_window={openModal_cart_handler}/>
<Body />

{modal?<Cart_window onCloseHandler={closeModal_cart_handler}/>:console.log("popup is closed")}

   </div>
  );
}

export default App;
