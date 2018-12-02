// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution 1
function reverseInt1(n) {
  var sign = Math.sign(n);
  var num = n.toString();
  if (sign == 1) {
    return parseInt(
      num
        .split('')
        .reverse()
        .join('')
    );
  } else if (sign == -1) {
    var res = '';
    for (var i = 1; i < num.length; i++) {
      res = num[i] + res;
    }
    res = '-' + res;
    return parseInt(res);
  }
  return 0;
}

// Solution 2
function reverseInt2(n) {
  var intStr = n.toString();
  var rev = '';
  if (n > 0) {
    for (let i in intStr) {
      rev = intStr[i] + rev;
    }
    return parseInt(rev);
  } else if (n < 0) {
    for (var i = 1; i < intStr.length; i++) {
      rev = intStr[i] + rev;
    }
    rev = '-' + rev;
    return parseInt(rev);
  }
  return 0;
}

// Solution 3
function reverseInt3(n) {
  var intRev = n
    .toString()
    .split('')
    .reverse()
    .join('');
  if (n < 0) {
    return parseInt(intRev) * -1;
  }
  return parseInt(intRev);
}

// Solution 4
function reverseInt(n) {
  var intRev = n
    .toString()
    .split('')
    .reverse()
    .join('');
  return parseInt(intRev) * Math.sign(n);
}

module.exports = reverseInt;
