// Demonstrates JSX component concept

import React from 'react';
import ReactDOM from 'react-dom';

class DynamicLanguages extends React.Component {
     
    render() {
        return (
            <div className='myCSSstyle' >
                <h1>Languages</h1>
                <ul>
                    <li>Ruby</li>
                    <li>Javascript</li>
                </ul>                                     
            </div>
        );
    }
}

ReactDOM.render(
    <DynamicLanguages/>, 
    document.getElementById('mount-point')
);
