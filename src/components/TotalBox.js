import React from 'react';

const TotalBox = props => {
  return <div className="total-box">Total = ${props.totalPrice.toFixed(2)}</div>;
};

export default TotalBox;
