import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


class Subjects extends Component {
  render(){
    return(<div>
      <h1>{this.props.course}</h1>
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
            <td>{this.props.modules[0].name}</td>
            <td>{this.props.modules[0].noLectures}</td>
            <td>{this.props.modules[0].noPracticals}</td>
          </tr>
          <tr>
            <td>{this.props.modules[1].name}</td>
            <td>{this.props.modules[1].noLectures}</td>
            <td>{this.props.modules[1].noPracticals}</td>
          </tr>
        </tbody>
      </table>
    </div>);
  }
}
let mods = [
  {
    name: 'Component Development',
    noLectures: 2,
    noPracticals: 2  
  },
  {
    name: 'Systems Analysis and Design',
    noLectures: 2,
    noPracticals: 1  
  }
];
let name = 'BSc XY 3' ;
ReactDOM.render(
  <Subjects course={name}  modules={mods}  />, document.getElementById('mount-point')
);
