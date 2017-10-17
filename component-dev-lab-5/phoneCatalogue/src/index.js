import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import PhoneCatalogueApp from './App';
import PhoneDetail from './phoneDetail';

ReactDOM.render(
  <Router history={browserHistory}>
  <Route path="/" component={App}/>
    <IndexRoute component={PhoneCatalogueApp}/>
    <Route path="phones/:id" component={PhoneDetail}/>
  <Route path="phones/" component={App}/>

</Router>, document.getElementById('root'));
