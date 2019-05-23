exports.groupArrayElements = (inputArray , arrayDivisor) => {
	/* Error Handling */
	if(!Number.isInteger(arrayDivisor)) {
		throw new TypeError('Chunk size (arrayDivisor) must be an Integer');
	} 
	if(arrayDivisor < 0) {
		throw new Error('Chunk size (arrayDivisor) cannot be less than zero.');
	} else if(arrayDivisor == 0) {
		throw new Error('Chunk size (arrayDivisor) cannot divide by zero.');
	}

	/* Build new nested array for grouped output */
	let outputArray = [];
	while(inputArray.length) {
		outputArray.push(inputArray.splice(0, arrayDivisor));
	}
	return outputArray;
}
