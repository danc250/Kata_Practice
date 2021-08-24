module.exports = input => input.split('').reduce((acc, c) => c === "(" ? ++acc : --acc, 0);
