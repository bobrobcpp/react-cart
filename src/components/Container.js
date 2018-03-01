import React from 'react';

import ItemList from './ItemList';
import TotalBox from './TotalBox';

export default class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { name: 'Mountain Dew', count: 0, price: 2.95 },
        { name: 'Desperados', count: 0, price: 4.35 },
        { name: 'Jack Daniels', count: 0, price: 10.34 }
      ],
      totalPrice: 0
    };
  }

  incrementCount = option => {
    let tempOption = option;
    tempOption.count += 1;
    let tempProducts = this.state.products;

    tempProducts.find((o, i) => {
      if (o.name === tempOption.name) {
        tempProducts[i] = tempOption;
        return true; // stop searching
      }
    });

    this.setState(prevState => {
      return {
        products: tempProducts
      };
    });
    this.calcTotal();
  };

  calcTotal = () => {
    let total = 0;
    this.state.products.forEach(product => {
      total += product.count * product.price;
    });
    this.setState(() => {
      return {
        totalPrice: total
      };
    });
  };

  render() {
    return (
      <div className="container">
        <ItemList products={this.state.products} incrementCount={this.incrementCount} />
        <TotalBox totalPrice={this.state.totalPrice} />
      </div>
    );
  }
}
