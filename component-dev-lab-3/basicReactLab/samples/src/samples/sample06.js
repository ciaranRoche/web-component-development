// Demonstrates props in JSX

import React from 'react';
import ReactDOM from 'react-dom';

class DynamicLanguages extends React.Component {
    render() {
        return (
            <div className='myCSSstyle' >
                <h1>{this.props.heading}</h1>
                <ul>
                    <li>{this.props.languages[0]}</li>
                    <li>{this.props.languages[1]} </li>
                </ul>                                     
            </div>
        );
    }
}
ReactDOM.render(
    <DynamicLanguages languages={['Ruby', 'Javascript']} 
        heading={'Languages'} />, 
    document.getElementById('mount-point')
);
