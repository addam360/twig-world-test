/* Imports */
let arrayGrouper = require('./array-grouper');

test('Array Grouper expects chunk size (divisor) to be an Integer', () => {
	// check for float
	let inputArray = [1,2,3,4,5];
	let arrayDivisor = 1.5;
	expect(() => {
		arrayGrouper.groupArrayElements(inputArray, arrayDivisor)
	}).toThrow(TypeError);
	// check for char
	arrayDivisor = 'a';
	expect(() => {
		arrayGrouper.groupArrayElements(inputArray, arrayDivisor)
	}).toThrow(TypeError);
});

test('Array Grouper does not attempt to divide by zero', () => {
	let inputArray = [1,2,3,4,5];
	let arrayDivisor = 0;
	expect(() => {
		arrayGrouper.groupArrayElements(inputArray, arrayDivisor)
	}).toThrow(Error);
});

test('Array Grouper expects chunk size (divisor) to be a positive value', () => {
	let inputArray = [1,2,3,4,5];
	let arrayDivisor = -2;
	expect(() => {
		arrayGrouper.groupArrayElements(inputArray, arrayDivisor)
	}).toThrow(Error);
});

test('Array Grouper handles an empty input array', () => {
	let inputArray = [];
	let arrayDivisor = 2;
	let result = arrayGrouper.groupArrayElements(inputArray, arrayDivisor);
	let expectedResult = [];
	expect(result).toStrictEqual(expectedResult);
});

test('Array Grouper handles an array of length 1', () => {
	let inputArray = ['a'];
	let arrayDivisor = 2;
	let result = arrayGrouper.groupArrayElements(inputArray, arrayDivisor);
	let expectedResult = [['a']];
	expect(result).toStrictEqual(expectedResult);
});

test('Array Grouper returns remainder correctly', () => {
	let inputArray = ['a','b','c','d','e','f','g','h'];
	let arrayDivisor = 3;
	let result = arrayGrouper.groupArrayElements(inputArray, arrayDivisor);
	let expectedResult = [['a','b','c'],['d','e','f'],['g','h']];
	expect(result).toStrictEqual(expectedResult);
	expect(result[2].length).toBe(2);
});

