var me = {
	name : {
       first : 'Diarmuid',
       last : "O'Connor"

	},   
	address : '1 Main Street',
	age : 21,                
	bank_balance : {
         amount : 20.2,
         type : 'D',
         bank : 'AIB'
	},
	male : true    
};

console.log (me.name.first + ' banks with ' + me['bank_balance']['bank']);

