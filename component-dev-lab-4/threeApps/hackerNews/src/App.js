import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form style={{marginTop: '30px'}}>
        <h3>Add a new post</h3>
        <div className='form-group'>
          <input type='text'
            className='form-control'
            placeholder='title'></input>
        </div>
        <div className='form-group'>
          <input type='text'
            className='form-control'
            placeholder='Link'></input>
        </div>
        <button type='submit' className='btn btn-primary'>Post</button>
      </form>
    );
  }
}

class NewsItem extends Component {
  render() {
    let divStyle = {
      fontSize: '20px', 
      marginLeft: '10px' 
    };
    let cursor = { cursor: 'pointer' } ;
    let line ;
    if (this.props.post.link ) {
      line = <a href={this.props.post.link} >
        {this.props.post.title}</a>;
      } else {
        line = <span>{this.props.post.title} </span> ;
      }
      return (
        <div>
          <span className="glyphicon glyphicon-thumbs-up" style={cursor} />
            {this.props.post.upvotes}
          <span style={divStyle}>{line}<span>
            <a href={'#/posts/' + this.props.post.id }>Comments</a>
          </span>
          </span>
        </div>  
      );
    }
}

class NewsList extends Component {
  render() {
    return null; //TODO
  }
}

class HackerApp extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6 col-md-offset-3'>
            <div className='page-header'>
              <h1>Hacker News</h1>
              <NewsList />
              <Form/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HackerApp;
