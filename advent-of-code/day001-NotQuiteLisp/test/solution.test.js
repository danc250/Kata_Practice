let solution = require('../src/solution.js');

let tests = [
	{
		input: "(())",
		expected: 0
	},
	{
		input: "()()",
		expected: 0
	},
	{
		input: "(((",
		expected: 3
	},
	{
		input: "(()(()(",
		expected: 3
	},
	{
		input: "))(((((",
		expected: 3
	},
	{
		input: "())",
		expected: -1
	},
	{
		input: "))(",
		expected: -1
	},
	{
		input: ")))",
		expected: -3
	},
	{
		input: ")())())",
		expected: -3
	}
]



tests.forEach(test => {
	let actual = solution(test.input);
	console.log(actual === test.expected);
})
