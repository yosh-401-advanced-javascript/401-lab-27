import React from 'react';
import Footer from './components/footer/footer';
import Header from './components/header/header';

import './app.scss';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      error: 'error'
    };
  }

  handleIncrement = e => {
    // e.preventDefault();
    this.setState((previousState) => {
      return { counter: previousState.counter + 1 };
    })
  };

  handleDecrement = e => {
    // e.preventDefault();
    this.setState((previousState) => {
      if(this.state.counter <= 0){
        return { error: 'error'};
      } else {
        return { counter: previousState.counter - 1, error: 'counter' };
      }
    })
  };

  render() {
    return (
        <div className='counter'>
          <h4 className={this.state.error}>{this.state.counter}</h4>
          <button className='incrementButton' onClick={this.handleIncrement}>Increment me!
          </button>
          <button className='decrementButton' onClick={this.handleDecrement} >Decrement me!
          </button>
        </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
        <React.Fragment>
          <Header />
          <Counter />
          <Footer />
        </React.Fragment>
    );
  }
}

export default Counter;
