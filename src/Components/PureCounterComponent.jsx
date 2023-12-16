import React, { PureComponent } from 'react';

class PureCounterComponent extends PureComponent {
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
    console.log("Pure Counter Component");
    const { counterValue } = this.state;

    return (
      <div>
        <h1>Pure Counter Component</h1>
        <h3>{counterValue}</h3>
        <button onClick={this.handleToggle}>Toggle</button>
        <button onClick={this.handleIncrementCounter}>Increment Counter</button>
      </div>
    );
  }
}

export default PureCounterComponent;
