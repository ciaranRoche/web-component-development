// Demonstrates generating JSX snippets from iterating ober
// a data array

import React from 'react';
import ReactDOM from 'react-dom';

class Frameworks extends React.Component {
    render() {
        var list = this.props.frams.map(function(fWork, index){
            return (
                <li key={index} >
                    <a href={fWork.url}> 
                        {fWork.name} </a>
                </li> );
        });
        return (
            <div>
                <h1>{this.props.type}</h1>
                <ul>
                    {list}
                </ul>
            </div>
        );
    }
}

var frameworks = [ 
    {name: 'React', url : 'https://facebook.github.io/react/'},
    {name: 'Ember', url : 'http://emberjs.com/'},
    {name: 'Angular', url : 'https://angularjs.org/'} ] ;
var type = 'JS client-side Web' ;
ReactDOM.render(
    <Frameworks frams={frameworks} type={type} />,
    document.getElementById('mount-point')
);
