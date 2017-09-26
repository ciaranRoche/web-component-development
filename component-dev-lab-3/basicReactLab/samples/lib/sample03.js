var root = React.createElement(
    'div',
    { className: 'myCSSstyle' },
    React.createElement( 'h1', null,'Languages' ),
    React.createElement('ul', null,
        React.createElement('li', null,'Ruby'),
        React.createElement( 'li', null,'Javascript')
    )
);
ReactDOM.render(root, 
    document.getElementById('mount-point'));