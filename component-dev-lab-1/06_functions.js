// Function declaration
console.log('---------- Function declarations -----------------')
function sayHello(person) {
	if (person.male === true) {
       console.log('Hello Mr. ' + person.name.last )
    } else {
       console.log('Hello Mrs. ' + person.name.last )
    }
}

var me = {
	name : {
       first : 'Diarmuid',
       last : "O'Connor"
	},   
	male : true    
}
// Calling/invoking a function
sayHello(me);   // Hello Mr. O'Connor
// ========================================
// 
console.log('---------- Variable scopes -----------------');
var foo1 = 2;        // Global scope
function variableScopes() {
   var foo2 = 12;
   foo3 = foo2 + foo1;
   console.log('foo3 = ' + foo3);
   var foo3    // Declared; not initialized
}
variableScopes();
//console.log(foo2)   // ERROR !!!!
//=========================
// 
console.log('---------- Function expressions -----------------')
var addMiddleName = function(person,middle_name) {
    if (person.name.middle === undefined) {
       person.name.middle = middle_name
    } else {
       person.name.middle += ' ' + middle_name
    }
}

addMiddleName(me,'Stephen');
console.log(me.name);
//================================
// Function result - the return value 
console.log('---------- Function return -----------------');
var my_worth = {
	current : [ { amount : 20.2, bank : 'AIB'}, 
	            { amount : 5.1, bank : 'BoI'}  ],
	deposit : [{ amount : 20.2, bank : 'Ulster'}],
	investment : []  // Empty array
}
var computeTotal = function (accounts) {
	var total = 0.0
    for (var type in accounts) {
    	for (i = 0 ; i < accounts[type].length ; i++) {
            total += accounts[type][i].amount
    	}
    }
    return total
}
console.log(computeTotal(my_worth));  // 45.5
// ===================================
// 
console.log('---------- Methods -----------------');
var person = {
	name : {
       first : 'Joe',
       last : 'Bloggs'
	   }, 
	finances : {
		current : [ { amount : 10.2, bank : 'AIB'}, 
		            { amount : 5.1, bank : 'BoI'}  ],
		deposit : [{ amount : 10.2, bank : 'Ulster'}],
		investment : [] 
        },   
    computeTotal : function () {
		var total = 0.0;
	    for (var type in this.finances) {
	    	for (i = 0 ; i < this.finances[type].length ; i++) {
	            total += this.finances[type][i].amount
	    	}
	    }
	    return total
	    },
	addMiddleName : function(middle_name) {
	    if (this.name.middle === undefined) {
	       this.name.middle = middle_name
	    } else {
	       this.name.middle += ' ' + middle_name
	    }
	    return this.name
        }
   }
console.log('Full worth = ' + person.computeTotal())
var full_name = person.addMiddleName('Paul')
console.log(person.name)
console.log(full_name)
// ==================================
// 
console.log("---------- The 'this' variable -----------------")
var obj1 = {
       name : 'Waterford',
       print : function() {console.log(this.name)}
       } 
var obj2 = {
       name : 'Joe Bloggs',
       print : function() {console.log(this.name)}
       } 
obj1.print()   // Waterford
obj2.print()   // Joe Bloggs
//=====================================
// 
console.log('---------- Anonymous functions -----------------')
setTimeout(function() {console.log('After 1000 miliseconds')}, 1000)
console.log('Immediately')
var nums = [12,22,5,28]
nums.forEach(function(entry) {
  if (entry > 20) {
     console.log(entry)
   }
  })
   
var products = [ {name: 'Product 1', price: 110}, 
                 {name: 'Product 2', price: 90 },
                 {name: 'Product 3', price: 120 } ]
products.forEach(function(product) {
      product.price = product.price - product.price * 0.1
    })
products.forEach(function(e) {console.log (e)})

//=====================================
// 
console.log('---------- Constructor functions -----------------')
function Customer(name_in,address_in,finances_in) {
  this.name = name_in
  this.address = address_in
  this.finances = finances_in  
  this.computeTotal = function () {
    var total = 0.0
      for (var type in this.finances) {
        for (i = 0 ; i < this.finances[type].length ; i++) {
              total += this.finances[type][i].amount
        }
      }
      return total
      }
  this.showFinances = function (address_in) {
        for (var type in this.finances) {
          var subTotal = 0
          this.finances[type].forEach(function(account) {
            subTotal += account.amount
          })
          console.log(type + ' = ' + subTotal)
      }
     }
     this.updateAccount = function (account_in) {
        var type_match = this.finances[account_in.type]
        if ( type_match != undefined  ) {
            type_match.forEach(function(account) {
            if (account.bank == account_in.bank) {
                account.amount = account_in.amount
                }
            })
          } else {
            console.log( this.name + ' does not have an account of type ' + 
                         account_in.type)
          }
        }
  }

  var joe = new Customer ('Joe Bloggs','I Mainstreet', 
            { current : [ { amount : 10.2, bank : 'AIB'}, 
                          { amount : 5.1, bank : 'BoI'}  ],
              deposit : [{ amount : 10.2, bank : 'Ulster'}],
            } )
  console.log('Joe is worth ' + joe.computeTotal())
  console.log(' and the breakdown is: ')
  joe.showFinances()
  joe.updateAccount( { type : 'current', bank: 'AIB', amount : 12.5} )
  console.log('Updated breakdown is: ')
  joe.showFinances()
  joe.updateAccount( { type : 'highrisk', bank: 'AIB', amount : 12.5} )
