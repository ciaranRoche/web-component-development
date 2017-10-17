import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';


class About extends React.Component {
    render() {
        return (
            <div>
                <h2>About page</h2>
            </div>
        );
    }
}

class Message extends React.Component {
    render() {
        return <h3>Messages for user: {this.props.params.id} </h3>;
    }
}

class InboxStats extends React.Component {
    render() {
        return <h3>....General Stats about users....</h3>;
    }
}

class Inbox extends React.Component {
    render() {
        return (
            <div>
                <h2>Inbox page</h2>
                {this.props.children}
            </div>
        );
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>App</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/inbox">Inbox</Link></li>
                </ul>
                {this.props.children}
            </div>
        );
    }
}

ReactDOM.render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="about" component={About} />
            <Route path="inbox" component={Inbox} >
                <IndexRoute component={InboxStats}/>
                <Route path="messages/:id" component={Message} />
            </Route>
        </Route>
    </Router>
), document.getElementById('root')) ;

