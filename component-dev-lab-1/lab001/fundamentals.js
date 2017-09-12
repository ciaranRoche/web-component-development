var aCar = {
	owner : "Joe Bloggs",
	type : {
		make : 'Toyota',
		model : 'Corolla',
		engine : 1.8
	},
	registration : {
		year : 10,
		county : 'WD',
		number : 1058
	}
};

console.log(aCar.owner + ' drives a ' + aCar.type.make);

console.log('Reg. = ' + aCar.registration.year + '-' +
	aCar.registration.county + '-' +
	aCar.registration.number );

aCar.mileage = 80000;
aCar.color = {
	exterior : 'red',
	interior : {
		texture : 'leather',
		shade : 'cream'
	}
};

console.log('It is a ' + aCar.color.exterior +
	' car, '  + aCar.mileage + ' mileage, and ' +
	aCar.color.interior.texture + ' interior' + ' with a shade of ' + aCar.color.interior.shade);