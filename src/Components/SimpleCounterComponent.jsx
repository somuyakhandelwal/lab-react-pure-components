import React, { Component } from 'react';

class SimpleCounterComponent extends Component {
  state = {
    isToggled: false,
    counterValue: 0,
  };

  handleToggle = () => {
    this.setState({ isToggled: !this.state.isToggled });
  };

  handleIncrementCounter = () => {
    if (this.state.isToggled) {
        this.setState({ counterValue: this.state.counterValue + 1 });
    }
  };

  render() {
    console.log("Simple counter Component");
    const { counterValue } = this.state;
    return (
      <div>
        <h1>Simple Counter Component</h1>
        <h3>{counterValue}</h3>
        <button onClick={this.handleToggle}>Toggle</button>
        <button onClick={this.handleIncrementCounter}>Increment Counter</button>
      </div>
    );
  }
}

export default SimpleCounterComponent;
