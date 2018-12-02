// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const chars = {};

  for (var i = 0; i < str.length; i++) {
    chars[i]=chars[i]+1||1;
  }

  var max = 0;
  var res = '';
  for (var i = 0; i < str.length; i++) {
    index = str[i];
    if (chars[index] > max) {
      max = chars[index];
      res = index;
    }
  }
  return chars[;
}

module.exports = maxChar;
