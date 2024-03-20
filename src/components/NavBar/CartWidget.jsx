import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Cart.css"

const CartWidget = () => {
  return (
    <div className="Cart"  >
      <AiOutlineShoppingCart size={30}/>
      <p>7</p> 
      
    </div>
  )
}

export default CartWidget
