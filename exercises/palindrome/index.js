// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//Soluition 1
function palindrome1(str) {
  var rev = '';
  for (var i = 0; i < str.length; i++) {
    rev = str[i] + rev;
  }
  if (rev == str) {
    return true;
  }
  return false;
}

//Solution 2
function palindrome2(str) {
  const rev = str
    .split('')
    .reverse()
    .join('');
  return str == rev;
}

//Solution 3 - Array Helper, not ideal
function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}

module.exports = palindrome;
