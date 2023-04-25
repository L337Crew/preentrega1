import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'


const Cartwidget = () => {
  return (
    <div className="cart-widget">
     <FaShoppingCart size={'25'} color={'green'}/>
      <span className="cart-notification" style={{color: 'white'}}>25</span>
    </div>

  )
}

export default Cartwidget