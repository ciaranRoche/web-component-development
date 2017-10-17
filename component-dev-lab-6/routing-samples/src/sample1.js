import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

class About extends React.Component {
    render() {
        return (
            <div>
                <h2>About page</h2>
            </div>
        );
    }
}

class Inbox extends React.Component {
    render() {
        return (
            <div>
                <h2>Inbox page</h2>
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>App Header</h1>
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox} />
        </Route>
    </Router>
), document.getElementById('root')) ;

