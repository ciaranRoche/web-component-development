import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

class Subjects extends Component {
  viewMods(){
    let list = this.props.modules.map((mods, index) => {
      return(<tr key={index}>
        <td>{mods.name}</td>
        <td>{mods.noLectures}</td>
        <td>{mods.noPracticals}</td>
      </tr>
      );
    });
    return list;
  }
  render() {
    return (
      <div>
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
            {this.viewMods()}
          </tbody>
        </table>
      </div>
    );
  }
}
let mods = [
  {
    name: 'Component Development',
    noLectures: 2,
    noPracticals: 2
  }, {
    name: 'Systems Analysis and Design',
    noLectures: 2,
    noPracticals: 1
  },
  {
    name: 'Dev Ops',
    noLectures: 1,
    noPracticals: 3
  },
  {
    name: 'Applied Crypto',
    noLectures: 2,
    noPracticals: 2
  }
];
let name = 'BSc XY 3';
ReactDOM.render(
  <Subjects course={name} modules={mods}/>, document.getElementById('mount-point'));
