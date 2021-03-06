import React, {Component} from 'react';
import _ from 'lodash';
import api from './test/stubAPI';

 
class Form extends Component {
  state = {title: '', link: ''};

  handleItem = () => this.props.itemHandler();

  handleAddItem = (e) => {
    e.preventDefault()
    api.add(this.state.title, this.state.link);
    console.log('add handler clicked');
    this.handleItem()
  }

  handleChange = (e) => {
    const name = e.target.name;
    this.setState({[name]: e.target.value});
  }

  render() {
    return (
       <form style={{marginTop: '30px'}}>
          <h3>Add a new post</h3>

          <div className="form-group">
            <input type="text"
              className="form-control"
              placeholder="Title"
              name = 'title'
              value = {this.state.title}
              onChange={this.handleChange}></input>
          </div>
          <div className="form-group">
            <input type="text"
            className="form-control"
            placeholder="Link"
            name = 'link'
            value={this.state.link}
            onChange={this.handleChange}></input>
          </div>
          <button type="submit" className="btn btn-primary" onClick={this.handleAddItem}>Post</button>
        </form>
        );
    }
}

class NewsItem extends Component {
  handleVote = () => this.props.upvoteHandler(this.props.post.id);
  handleDownVote = () => this.props.downvoteHandler(this.props.post.id);
  render() {
      let lineStyle = {
           fontSize: '20px', 
           marginLeft: '10px' 
          };
      let cursor = { cursor: 'pointer' } ;
      let line ;
      if (this.props.post.link ) {
         line = <a href={this.props.post.link} >
        {            this.props.post.title} </a> ;
      } else {
         line = <span>{this.props.post.title} </span> ;
      }
    return (
        <div >
          <span className="glyphicon glyphicon-thumbs-down"
            style={cursor}
            onClick={this.handleDownVote}/>
            <span style={{paddingLeft: '5px'}}/>
          <span className="glyphicon glyphicon-thumbs-up"
                style={cursor} 
                onClick={this.handleVote}/>
          {this.props.post.upvotes}
          <span style={lineStyle} >{line}<span>
              <a href={'#/posts/' + this.props.post.id }>Comments</a>
            </span>
          </span>
        </div>  
        );
  }
}

class NewsList extends Component {
  render() {
    var items = this.props.posts.map((post,index) => {
           return <NewsItem key={index} post={post} upvoteHandler={this.props.upvoteHandler} downvoteHandler={this.props.downvoteHandler}/> ;
       });
    return (
      <div>
        {items}
      </div>
      );
  }
}

class HackerApp extends Component {
  incrementUpvote = (id) => {
    api.upvote(id);
    this.setState({});
  };
  decreaseUpvote = (id) => {
    api.downvote(id);
    this.setState({});
  };
  itemAdd = () => {
    this.setState({});
  }
  render() {
      let posts = _.sortBy(api.getAll(), function (post) {
        return -post.upvotes;
      });
      return (
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <div className="page-header">
                  <h1>Hacker News</h1>
                  <NewsList posts={posts}
                   upvoteHandler={this.incrementUpvote}
                   downvoteHandler={this.decreaseUpvote} />
                  <Form itemHandler={this.itemAdd}/>
           </div>
             </div>
            </div>
          </div>
      );
  }
}

export default HackerApp;
