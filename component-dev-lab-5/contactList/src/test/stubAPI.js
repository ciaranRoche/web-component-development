import _ from 'lodash';

class StubAPI{
  constructor(){
    this.contacts = [
      {
        'name': 'Contact 1',
        'address': '123 Test St',
        'phone_number': '132-3212'
      }, {
        'name': 'Contact 2',
        'address': '23 Main St',
        'phone_number': '934-4329'
      }, {
        'name': 'Contact 3',
        'address': '4 Lower St',
        'phone_number': '432-5832'
      }, {
        'name': 'Contact 4',
        'address': '40 Upper Street',
        'phone_number': '934-4290'
      }
    ];
  }

  delete(k) {
    let promise = new Promise((resolve, reject) => {
      var elements = _.remove(this.contacts, function(contact){
        return contact.phone_number === k;
      });
      setTimeout(() => resolve(elements), 1000)
    });
    return promise;
  }

  getAll() {
    var promise = new Promise ((resolve, reject) => {
      setTimeout(() => resolve(this.contacts), 1000)
    });
    return promise;
  }

  add(n,a,p) {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
          this.contacts.push({name:n, address:a, phone_number:p})
          resolve(true)
      }, 1000)
    })
    return promise;
  }

  update(key, n, a, p){
    let promise = new Promise ((resolve, reject) => {
      setTimeout(() => {
        let index = _.findIndex(this.contacts, function(contact){
          return contact.phone_number === key;
        });
        if (index !== -1){
          this.contacts.splice(index, 1, {name: n, address:a, phone_number: p});
          resolve(true);
        }else{
          reject(key);
        }
      }, 1000);
    });
    return promise;
  }
}


export default (new StubAPI());