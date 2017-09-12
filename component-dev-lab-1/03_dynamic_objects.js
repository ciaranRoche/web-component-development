var me = {
	name : "Diarmuid O'Connor",   
	address : '1 Main Street',
	age : 21,                
	bank_balance : 20.2,   //millions
	male : true    
}
// New property
me.employer = 'WIT';
console.log (me.name + ' works for ' + me.employer);
// Remove property
delete me.age;
console.log (me.age); // undefined

