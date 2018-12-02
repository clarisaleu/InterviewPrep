// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

// Long
function vowels1(str) {
    var count = 0;
    var strLoop = str.replace(/[^\w]/g,"").toLowerCase();
    for(let i = 0; i < strLoop.length; i ++){
        if(strLoop[i]==="a"||strLoop[i]==="e"||strLoop[i]==="i"||strLoop[i]==="o"||strLoop[i]==="u"){
            count++;
        }
    }
    return count;
}

// Iter Sol
function vowels2(str){
    let count = 0;
    const checker = "aeiou";
    // Better to do Array.. can add substrings later
    // const check = ["a","e","i","o","u"];
    for(let char of str.toLowerCase()){
        if(checker.includes(char)){
            count++;
        }
    }
    return count;
}

// Regular Expression Sol

function vowels(str){
    // null if no vowels.
    const matches = str.match(/[aeiou]/gi);
    // ternirary express
    return matches ? matches.length : 0;
}

module.exports = vowels;
