import React, { Component } from 'react';

class ContactForm extends Component {
  render(){
    return (
      <tr>
        <td>
          <input type="text" className="form-control" />
        </td> 
        <td>
          <input type="text" className="form-control"/>
        </td>
        <td>
          <input type="text" className="form-control" />
        </td>
        <td>
          <input type="button" className="btn btn-primary" value="Add"/>
        </td>
      </tr>
    )
  }
}

class Contact extends Component {
  render(){
    return (
      <tr>
        {/* TODO */}
      </tr>
    )
  }
}

class ContactList extends Component {
  render(){
    let contactRows = null; //TODO
    return (
      <tbody>
        {contactRows}
        <ContactForm />
      </tbody>
    )
  }
}

class ContactsTable extends Component {
  render() {
    return (
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <ContactList contacts={this.props.contacts}/>
      </table>
    );
  }
}

class ContactsApp extends Component {
  render() {
    return (
      <div>
        <h1>Contact List.</h1>
        <ContactsTable contacts={this.props.contacts}/>
      </div>
    );
  }
}

export default ContactsApp;


