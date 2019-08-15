//Print all numbers between -10 and 19
var num = -10;

console.log('Print all numbers between -10 and 19');
while (num <= 19) {
	console.log('The count is: ' + num);
	num++;
}

//Print all even numbers between 10 and 40

// var even = 10;

// console.log('Print all even numbers between 10 and 40');
// while (even <= 40) {
// 	console.log('The count is: ' + even);
// 	even ++ 2;
// }

var even = 10;

console.log('Print all even numbers between 10 and 40');
while (even <= 40) {
	if (even % 2 === 0) {
		console.log('The count is: ' + even);
	}
	even += 1;
}

//Print all odd numbers between 300 and 333
// var odd = 303;

// console.log('Print all odd numbers between 300 and 333');
// while (odd <= 333) {
// 	console.log('The count is: ' + odd);
// 	odd += 3;
// }

var odd = 303;

console.log('Print all odd numbers between 300 and 333');
while (odd <= 333) {
	if (odd % 2 !== 0) {
		console.log('The count is: ' + odd);
	}
	odd += 1;
}

//Print all numbers divisible by 5 AND by 3, between 5 and 50
var count = 5;

console.log('Print all numbers divisible by 5 AND by 3, between 5 and 50');
while (count <= 50) {
	if (count % 5 === 0 && count % 3 === 0) {
		console.log('The count is: ' + count);
	}
	count++;
}
