import React, { Component } from 'react';
import Coin from './Coin';
import { choice } from './helpers';

class Flipper extends Component {
  static defaultProps = {
    coins: [
      { side: 'head', imgSrc: 'https://tinyurl.com/react-coin-heads-jpg' },
      { side: 'tails', imgSrc: 'https://tinyurl.com/react-coin-tails-jpg' },
    ],
  };

  state = {
    headFlips: 0,
    tailsFlips: 0,
    currSide: null,
  };

  flipCoin = () => {
    const newSide = choice(this.props.coins);
    this.setState((currState) => {
      return {
        currSide: newSide,
        headFlips: currState.headFlips + (newSide.side === 'head' ? 1 : 0),
        tailsFlips: currState.tailsFlips + (newSide.side === 'tails' ? 1 : 0),
      };
    });
  };

  handleCLick = (e) => {
    this.flipCoin();
  };

  render() {
    return (
      <div className="Flipper">
        <h2>Flip a coin!</h2>
        {this.state.currSide && <Coin info={this.state.currSide} />}
        <button onClick={this.handleCLick}>Click me</button>
        <div>The Number of head flips: {this.state.headFlips}</div>
        <div>The Number of tails flips: {this.state.tailsFlips}</div>
      </div>
    );
  }
}

export default Flipper;
