import React, { useContext } from 'react'
import Styles from './Styles.module.css'
import { Data_ProductList } from '../../Data'
import { AiOutlineHeart } from 'react-icons/ai'
import {CartContextCreate} from "../../Context/index";
export default function Main(props) {
let context=useContext(CartContextCreate)
// console.log(context,"jhbjh")
const addToCart_click_handler=(e)=>{
  context.addtocart(e.target.id)
}


return (






    <div className={Styles.Main_div}>
  <div className={Styles.sub_div}>

{/* <span>{props.imageLink}</span> */}

{/* for image */}
<div className={Styles.image_div1}> <img className={Styles.img1} src={props.imageLink} alt="product image" />  </div>

{/* like or whish list */}
<div className={Styles.whishlist_icon_div}><AiOutlineHeart/></div>
        
{/*product name, price,.... */}
<div className={Styles.product_details_div}>
<span className={Styles.product_name}>{props.title}</span>
<span className={Styles.product_price}>{props.price}</span>
</div >

{/* buttons */}
<div className={Styles.buttons_div}>
<button id={props.id} onClick={addToCart_click_handler} className={Styles.addToCart_button}>Add to cart</button>
<button className={Styles.details_button}>details</button>
</div>
</div>
    </div>
  )
}
