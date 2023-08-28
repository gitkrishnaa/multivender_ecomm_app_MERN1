import logo from '../logo.svg';
import '../App.css';
import { Header,Body,Footer } from '../Container';
import { Cart_window, Products_component } from '../Components';
import { useState } from 'react';
import CartContextProvider from "../Context/cart/Context_provider";
import {createBrowserRouter} from "react-router-dom"

function App() {




const [modal,setModal]=useState(false)
const closeModal_cart_handler=()=>{
setModal(false)
}
const openModal_cart_handler=()=>{
  setModal(true)
  }

  return (
   <CartContextProvider>
   <div className="main">
<Header onclick_open_cart_window={openModal_cart_handler}/>
<Body />

{modal?<Cart_window onCloseHandler={closeModal_cart_handler}/>:console.log("popup is closed")}

   </div>
   </CartContextProvider>
  );
}

export default App;
