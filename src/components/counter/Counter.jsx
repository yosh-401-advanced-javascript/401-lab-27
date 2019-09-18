import React from 'react';


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      error: 'error',
    };
  }

  /**
   * @Function to handle increments
   * @param e
   */
  handleIncrement = (e) => {
    // e.preventDefault();
    this.setState((previousState) => {
      return { counter: previousState.counter + 1 };
    });
  };

  /**
   * @Function to handle decrements
   * @Function changes the color of the counter
   * @param e
   */
  handleDecrement = (e) => {
    // e.preventDefault();
    this.setState((previousState) => {
      if (this.state.counter <= 0) {
        return { error: 'error' };
      }
      return { counter: previousState.counter - 1, error: 'counter' };
    });
  };

  render() {
    return (
        <div className='counter'>
          <h4 className={this.state.error}>{this.state.counter}</h4>
          <div className='flexContainer'>
          <button className='incrementButton' onClick={this.handleIncrement}>Increment me!
          </button>
          <button className='decrementButton' onClick={this.handleDecrement} >Decrement me!
          </button>
          </div>
        </div>
    );
  }
}

export default Counter;
