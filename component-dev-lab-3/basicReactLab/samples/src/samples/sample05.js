// Demonstrates the embedding of variables in JSX

import React from 'react';
import ReactDOM from 'react-dom';

class DynamicLanguages extends React.Component {
    render() {
        var languages = ['Ruby', 'Javascript'] ;
        return (
            <div className='myCSSstyle' >
                <h1>Languages</h1>
                <ul>
                    <li>{languages[0] + ' V4'}</li>
                    <li>{languages[1]} </li>
                </ul>                                     
            </div>
        );
    }
}

ReactDOM.render(
    <DynamicLanguages/>, document.getElementById('mount-point')
);
