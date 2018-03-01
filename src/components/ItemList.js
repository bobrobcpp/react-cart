import React from 'react';
import Item from './Item';

const ItemList = props => (
  <div>
    {props.products.map((option, index) => (
      <Item key={index} product={props.products[index]} incrementCount={props.incrementCount} itemText={option} />
    ))}
  </div>
);

export default ItemList;
