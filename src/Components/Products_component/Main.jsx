import React from 'react'
import Styles from './Styles.module.css'
import { Data_ProductList } from '../../Data'
import { Products_list_render } from '..'


export default function Main() {
    console.log(Data_ProductList)
  return (
    <div className={Styles.Main_div}>


{Data_ProductList.map((e,n)=>{
 return <Products_list_render id={n} title={e.title} price={e.price} imageLink={e.imageUrl}/>


})}



    </div>
  )
}
