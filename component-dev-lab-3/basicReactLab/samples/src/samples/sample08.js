// Demonstrates component state management

import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Counter extends React.Component {
  static defaultProps = {
      jump: 2
  };

  static propTypes = {
      jump: PropTypes.number
  };

  // Initialize state
  state = {
      count: 0
  };
  // custom method
  incrementCount = () => {
      this.setState( { count: this.state.count + this.props.jump });
  };

  render() {
      return (
          <div >
              <h1>Count: {this.state.count}</h1>
              <h2>Increment size: {this.props.jump}</h2>
              <button type="button" onClick={this.incrementCount}>Increment</button>
          </div>
      );
  }
}

ReactDOM.render(
    <Counter  jump={3} />,
    document.getElementById('mount-point')
);
