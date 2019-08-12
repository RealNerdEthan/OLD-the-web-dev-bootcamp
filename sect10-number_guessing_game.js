var correctNum = 7;
var guess = Number(prompt('What number am I thinking of?'));

if (guess == correctNum) {
	alert('Correct! Good guess!');
} else if (guess < 7) {
	alert('Too low! Try again.');
} else {
	alert('Too high! Try again.');
}
