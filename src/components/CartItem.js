import React from 'react';

const CartItem = (props) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      {props.item.title}
      <button type="button" className="btn btn-danger btn-sm" onClick={() => 
          props.onItemRemove(props.index)
      }>Remove</button>
    </li>
  );
};

export default CartItem;