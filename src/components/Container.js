import React from 'react';
import Item from './Item';
export default class Container extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   products: [
    //   {name: 'Mountain Dew', count: 0, price: 2.95},
    //   {name: 'Desperados', count: 0, price: 4.35},
    //   {name: 'Jack Daniels', count: 0, price: 10.34}
    //   ]
    // };
  }

  calcTotal = () => {};
  render() {
    return (
      <div className="container">
        <Item name={'Mountain Poo'} count={0} price={2.95} />
        <Item name={'Pesterdaos'} count={0} price={2.95} />
        <Item name={'Lack Flaniels'} count={0} price={2.95} />
      </div>
    );
  }
}
