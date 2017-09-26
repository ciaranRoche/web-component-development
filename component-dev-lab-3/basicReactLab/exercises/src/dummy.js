import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <h2>Welcome to Basic React Lab</h2>
    );
  }
}

ReactDOM.render(
  <App />, document.getElementById('mount-point')
);

