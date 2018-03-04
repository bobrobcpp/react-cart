import React from 'react';

const Item = props => (
  <div className="item">
    <div className="item-cell">{props.product.name}</div>
    <button
      className="counter item-cell"
      onClick={e => {
        props.incrementCount(props.itemText);
      }}
    >
      {props.product.count}
    </button>
    <div className="item-cell">${props.product.price}</div>
  </div>
);

export default Item;
