// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// Works but doesn't work for punctuation
function anagrams1(stringA, stringB) {
    var strA = stringA.toLowerCase().split(' ').join('').split('').sort().join('');
    var strB = stringB.toLowerCase().split(' ').join('').split('').sort().join('');
    return strA==strB;

}


// One line solution
function anagrams2(stringA, stringB) {
  return  stringA.replace(/[^\w]/g,"").toLowerCase().split(' ').join('').split('').sort().join('')==stringB.replace(/[^\w]/g,"").toLowerCase().split(' ').join('').split('').sort().join('');
}

// Character map solution
function anagrams3(stringA, stringB){
    const charMapA = charMap(stringA);
    const charMapB = charMap(stringB);
    
    if(Object.keys(charMapA).length!==Object.keys(charMapB).length){
        return false;
    } 

    // Iterate in object; use in. otherwise you use of
    // loop through either charMapB or A ... check occurance of characters.
    for(let char in charMapA){
        if(charMapB[char]!==charMapA[char]){
            return false;
        }
    }
    return true;
}


// Other Solution
function anagrams(stringA,stringB){
    return cleanString(stringA)==cleanString(stringB);
}

// Helper function: clean string
function cleanString(str){
    return str.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('');
}

// Helper function: Build character map given a string.
function charMap(str){
    const charObj = {};
    for(let char of str.replace(/[^\w]/g,"").toLowerCase()){
       charObj[char] = charObj[char]+1||1;
    }
    return charObj;
}

module.exports = anagrams;
