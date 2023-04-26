function generateParenthesesPair(numberOfPairs) {
  if (numberOfPairs === 0) {
    return '';
  }
  if (numberOfPairs === 1) {
    return '()';
  }
  let result = '';
  for (let i = 0; i < numberOfPairs; i++) {
    result += '(';
  }
  for (let i = 0; i < numberOfPairs; i++) {
    result += ')';
  }
  return result;
}

console.log(generateParenthesesPair(0)); // ''
console.log(generateParenthesesPair(1)); // '()'
console.log(generateParenthesesPair(2)); // '(())'
console.log(generateParenthesesPair(3)); // '((()))'
console.log(generateParenthesesPair(12)); // '(((((((((((())))))))))))'

module.exports = generateParenthesesPair;