import React from 'react';

export default class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      count: this.props.count,
      price: this.props.price
    };
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1
      };
    });
  };

  render() {
    return (
      <div className="item">
        <div>{this.state.name}</div>
        <div className={'counter'} onClick={this.handleClick}>
          {this.state.count}
        </div>
        <div>{this.state.price}</div>
      </div>
    );
  }
}
