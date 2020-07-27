import React from 'react';
import CartItem from './CartItem';

const Cart = (props) => {

  const _cartItems = [];

  if(props.cart && props.cart.items) {
    props.cart.items.forEach((item, index) => {
      _cartItems.push(
        <CartItem key={index} 
          index={index} 
          item={item} 
          onItemRemove={(index) => props.onItemRemove(index)} 
        />
      )
    });    
  }

  
  return (
    <ul className="list-group">
      {_cartItems}
    </ul>
  );
  
}

export default Cart;