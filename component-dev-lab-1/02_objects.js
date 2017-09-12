var me = {
	name : "Diarmuid O'Connor",   // use " " when string contains '
	address : '1 Main Street',
	age : 21,                
	bank_balance : 20.2,   //millions
	male : true    // no comma for the last property
};

console.log (me.name + ' lives at ' + me['address']);
// Can also use a variable in subscript notation
var prop = 'bank_balance';
var balance = me[prop];
console.log('Balance = ' + balance);
// Changing a property value
me.address = '2 Main Street';
console.log (me.name + ' lives at ' + me['address']);

