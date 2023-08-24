import React from "react";
import Title from "../Title/Main";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import Styles from "./Styles.module.css"
function NavBar() {
  return (
    <nav>
      <div className={Styles.MainDiv}>
        <div>
          <Title />
        </div>
        {/* menus */}
        <div className={Styles.nav_links}>
           <div>Shop</div>
<div>Most wanted</div>
<div>New arrival!</div>
<div>Brands</div>
        </div>
        <div className={Styles.search_and_button}>
          <div className={Styles.search_div}>
            <input className={Styles.search_input} type="text" placeholder="Search" />
          </div>
          <div className={Styles.nav_buttons}>
            <div>
              <AiOutlineShoppingCart />
            </div>
            <div>
              <AiOutlineUser />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
