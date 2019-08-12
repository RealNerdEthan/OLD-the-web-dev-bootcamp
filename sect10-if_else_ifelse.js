var age = prompt('What is your age?');

if (age < 18) {
	alert("Sorry you aren't old enough.");
} else if (age < 21) {
	alert('You can enter but NO drinking!');
} else {
	alert('You can enter and have a drink!');
}
