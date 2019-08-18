console.log('Print all numbers between -10 and 19');
for (var i = -10; i <= 19; i++) {
	console.log('The count is ' + i);
}

console.log('Print all even numbers between 10 and 40');
for (var j = 10; j <= 40; j++) {
	if (j % 2 === 0) {
		console.log('The count is ' + j);
	}
}

console.log('Print all odd numbers between 300 and 333');
for (var k = 300; k <= 333; k++) {
	if (k % 2 !== 0) {
		console.log('The number is ' + k);
	}
}

console.log('Print all numbers divisible by 5 AND 3, between 5 and 50');
for (var i = 5; i <= 50; i++) {
	if (i % 5 === 0 && i % 3 === 0) {
		console.log('The count is: ' + i);
	}
}
