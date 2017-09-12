var aCar = {
	owner : "Joe Bloggs",
	type : {
		make : 'Toyota',
		model : 'Corolla',
		engine : 1.8
	},
	previous_owners : [{
		name : 'Pat smith',
		address : '1 Main Street'
	},{
		name : 'Sheila Dwyer',
		address : '2 High Street'
	}],
	features : ['Parking assist',
		'Alarm',
		'Tow-bar'],
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

console.log('First owner : ' + aCar.previous_owners[0].name );

console.log('\nThe extra features of the car are : ');
for (var i = 0 ; i < aCar.features.length ; i += 1) {
	console.log(aCar.features[i]) ;
};
console.log('\nThe previous owners of the car are : ');
for (var l=0; l <aCar.previous_owners.length; l++){
	console.log(aCar.previous_owners[l].name)
}
console.log('\n');
for (var p in aCar.type)  {
	console.log(p.toUpperCase() + ' = ' + aCar.type[p] ) ;
}