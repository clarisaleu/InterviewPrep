// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"



function maxChar1(str) {
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
  return chars;
}


function maxChar(str) {
  const charsMap = {};
  let max = 0;
  let maxChar = '';

  for(let char of str){
    if(charMap[char]){
      charMap[char]++;
    } else{
      charMap[char]=1;
    }
  }

  // Loop through object
  for(let char in charMap){
    if(charMap[char]>max){
      maxChar=char;
      max = charMap[char];
    }
  }
  return maxChar;
}



module.exports = maxChar;
