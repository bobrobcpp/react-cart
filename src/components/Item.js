import React from 'react';

const Item = props => (
  <div className="item">
    <div>{props.product.name}</div>
    <div
      className="counter"
      onClick={e => {
        props.incrementCount(props.itemText);
      }}
    >
      {props.product.count}
    </div>
    <div>${props.product.price}</div>
  </div>
);

export default Item;
