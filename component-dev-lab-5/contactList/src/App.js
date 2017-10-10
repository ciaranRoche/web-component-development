    import React from 'react';
    import api from './test/stubAPI'

    class ContactForm extends React.Component {
      render() {
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

    class Contact extends React.Component {
      render() {
          return (
            <tr >
              <td>
                 { this.props.contact.name }
              </td>
              <td>
                 {this.props.contact.address }
              </td>
              <td>
                   {this.props.contact.phone_number}
              </td>
              <td>
                 <input type="button" className="btn btn-primary" value="Edit"/>
              </td>  
              <td>
                 <input type="button" className="btn btn-danger" value="Delete"/>
              </td>                      
          </tr>

            ) ;
        }
    }

    class ContactList extends React.Component {
      render() {
         var contactRows =   this.props.contacts.map(
                function(c) {
                     return <Contact key={c.phone_number} contact={c} />
                });
          return (
              <tbody >
                  {contactRows}
                  <ContactForm />
              </tbody>
            ) ;
        }
    }

    class ContactsTable extends React.Component {
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
                  <ContactList contacts={this.props.contacts}  />
            </table>
            );
      }
    }

    class ContactsApp extends React.Component {
      render() {
        let contacts = api.getAll();
          return (
                <div>
                   <h1>Contact List.</h1>
                   <ContactsTable contacts={contacts}  />
                </div>
          );
      }
    }

    export default ContactsApp;