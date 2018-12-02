// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution with for loop
function reverse1(str) {
  let result = '';
  for (var i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// String to array, reverse array, array to string
function reverse2(str) {
  return str
    .split('')
    .reverse()
    .join('');
}

// Using for loop 2nd Solution: add character to beginning of string
function reverse3(str) {
  let reversed = '';
  for (let character of str) {
    reversed = character + reversed;
  }
  return reversed;
}

// Array Helper: ES2015/2016
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

reverse('ads');

module.exports = reverse;
