import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import './sample5.css' ;

class About extends React.Component {
    render() {
        return (
            <div>
                <h1>About page</h1>
            </div>
        );
    }
}

class Inbox extends React.Component {
    render() {
        return (
            <div>
                <h1>Inbox page</h1>
                {this.props.children}
            </div>
        );
    }
}

class Message extends React.Component {
    render() {
        return <h3>Message for user: {this.props.params.id} </h3>;
    }
}

class InboxStats extends React.Component {
    render() {
        return <h3>....General Stats about users....</h3>;
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="navbar navbar-fixed-top navbar-inverse" >
                <div className="container">
                    <Link to="/" id="logo" >React Router Demo</Link>
                    <nav>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/inbox">Inbox</Link></li>
                            <li><Link to="#">Nav A</Link></li>
                            <li><Link to="#">Nav B</Link></li>
                            <li><Link to="#">Nav C</Link></li>                    
                        </ul>
                    </nav>
                </div>
            </div>
        );
    }
}

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <small>
            The <a href="https://facebook.github.io/react/">ReactJS library</a>
            by <a href="https://www.facebook.com/">Facebook</a>
                </small>
                <nav>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/inbox">Inbox</Link></li>
                        <li><Link to="#">Nav X</Link></li>
                        <li><Link to="#">Nav Y</Link></li>
                        <li><a href="http://newsroom.fb.com/">News</a></li>
                    </ul>
                </nav>
            </footer>
        ) ;
    }
}

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    {this.props.children}
                </div>
                <Footer />
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

