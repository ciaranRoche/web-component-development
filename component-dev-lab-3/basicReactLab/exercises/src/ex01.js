import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
  render(){
    return(<div>
      <h1>Bsc XY 3 Modules table</h1>
      <table className='table table-bordered'>
        <thead>
          <tr>
            <th>Name</th>
            <th>No lectures</th>
            <th>No practicles</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Component Development</td>
            <td>2</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Software Analysis and Design</td>
            <td>3</td>
            <td>2</td>
          </tr>
        </tbody>
      </table>
    </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.getElementById('mount-point')
);