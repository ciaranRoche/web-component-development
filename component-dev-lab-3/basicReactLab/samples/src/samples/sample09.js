// Demonstrates component composition

import React from 'react';
import ReactDOM from 'react-dom';


class Child1 extends React.Component {
    render() {
        return (
            <div >
                <h2>I'm child component 1</h2>
            </div>
        );
    }
}

class Child2 extends React.Component {
    render() {
        return (
            <div >
                <h2>I'm child component 2</h2>
            </div>
        );
    }
}

class Parent extends React.Component {
    render() {
        return (
            <div >
                <h1>I'm parent component</h1>
                <Child1/>
                <Child2/>
            </div>
        );
    }
}

ReactDOM.render(
    <Parent/>,
    document.getElementById('mount-point')
);
