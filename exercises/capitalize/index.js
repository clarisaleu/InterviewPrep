// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// My Solution
function capitalize1(str) {
    let strArr = str.split(' ');
    
    for(var word =0; word < strArr.length; word ++){
        var slicedWord = strArr[word].slice(1).split('');
        var firstChar =  strArr[word][0].toUpperCase().split('');
        strArr[word]=firstChar.concat(slicedWord)
    }
    return strArr.join(' ').replace(/[,]/g,"");
}

// 2nd Solution
function capitalize2(str) {
   const words = [];

   for(let word of str.split(' ')){
       words.push(word[0].toUpperCase()+word.slice(1));
   }
   return words.join(' ');
}

// 3rd Solution - kinda weak for spanish sentences.
function capitalize(str) {
    let res = str[0].toUpperCase();
    for(let i = 1; i < str.length; i ++){
        if(str[i-1] === " "){
            res += str[i].toUpperCase();
        } else {
            res += str[i];
        }
    }
    return res;
 }
 
 


module.exports = capitalize;
