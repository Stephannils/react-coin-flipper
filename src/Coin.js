import React, { Component } from 'react';
import './Coin.css';

class Coin extends Component {
  render() {
    return (
      <div className="Coin">
        <img src={this.props.info.imgSrc} alt={this.props.info.alt}></img>
      </div>
    );
  }
}

export default Coin;
