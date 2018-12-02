// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk1(array, size) {
    var resArr = [[]];
    var index;
    if(array.length%size==0){
        index =size;
    } else { 
        index = array.length%size + 1;
    }

    for(var i = 0 ; i < index; i){
        for(var j = 0; j < size; j++){
        resArr[[i]] = array[size];
        }
    }
    return resArr;
}

function chunk(array, size) {
    var resArr = [[]];
    var index;
    if(array.length%size==0){
        index =size;
    } else { 
        index = array.length%size + 1;
    }

    for(var i = 0 ; i < index; i){
        for(var j = 0; j < size; j++){
        resArr[[i]] = array[size];
        }
    }
    return resArr;
}

module.exports = chunk;
