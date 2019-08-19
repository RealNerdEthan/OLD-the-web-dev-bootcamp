//For this test, I realy had no idea how to accomplish this. I did some research online but I had to watch the solution video to fully understand it

function factorial(num) {
	//define a result variable
	var result = 1;
	//calculate factorial and store value in result
	for (var i = 2; i <= num; i++) {
		result *= i;
	}
	//return the result variable
	return result;
}
