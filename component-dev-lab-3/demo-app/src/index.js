import React from 'react';
import ReactDOM from 'react-dom';
import Subjects from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';


let mods = [
  {
    name: 'Component Development',
    noLectures: 2,
    noPracticals: 2
  }, {
    name: 'Systems Testing and Design',
    noLectures: 2,
    noPracticals: 1
  }, {
    name: 'Dev Ops',
    noLectures: 1,
    noPracticals: 3
  }, {
    name: 'Applied Crypto',
    noLectures: 2,
    noPracticals: 2
  },{
    name: 'Wireless Tech',
    noLectures: 2,
    noPracticals: 2
  },{
    name: 'Flexi Prep',
    noLectures: 4,
    noPracticals: 0
  }
];
let name = 'BSc XY 3';

ReactDOM.render(
  <Subjects course={name} modules={mods}/>, document.getElementById('mount-point'));
  registerServiceWorker();