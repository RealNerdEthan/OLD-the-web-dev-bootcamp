var answer = prompt('Are we there yet?');

//The answer must equal exactly the words yes or yeah
while (answer.indexOf('yes') === -1) {
	var answer = prompt('Are we there yet?');
}

alert('Yay! We made it!');
