import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';


class Subjects extends Component {
  render(){
    let modules = [
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
    ] ;
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
            <td>{modules[0].name}</td>
            <td>{modules[0].noLectures}</td>
            <td>{module[0].noPracticals}</td>
          </tr>
          <tr>
            <td>{modules[1].name}</td>
            <td>{modules[1].noLectures}</td>
            <td>{modules[1].noPracticals}</td>
          </tr>
        </tbody>
      </table>
    </div>);
  }
}

ReactDOM.render(
  <Subjects/> , document.getElementById('mount-point')
);