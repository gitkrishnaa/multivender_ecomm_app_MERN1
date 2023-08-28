import logo from './logo.svg';
import './App.css';
import { Header,Body,Footer } from './Container';
import { Cart_window, Products_component } from './Components';
import { useState } from 'react';
import CartContextProvider from "./Context/cart/Context_provider";
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import {Home,About } from './Pages';

function App() {
const router1=createBrowserRouter([
  {path:"/", element:<Home />},
  {path:"/About", element:<About />},
])



const [modal,setModal]=useState(false)
const closeModal_cart_handler=()=>{
setModal(false)
}
const openModal_cart_handler=()=>{
  setModal(true)
  }



  return <RouterProvider router={router1}/>
//   return (
//    <CartContextProvider>
//    <div className="main">
// <Header onclick_open_cart_window={openModal_cart_handler}/>
// <Body />

// {modal?<Cart_window onCloseHandler={closeModal_cart_handler}/>:console.log("popup is closed")}

//    </div>
//    </CartContextProvider>
//   );
}

export default App;
