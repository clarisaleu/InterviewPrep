// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//Doesn't work
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

// Iterate through the entire array.
function chunk2(array, size) {
    const chunked = [];

    for (let element of array){
        const last = chucked[chunked.length-1];
        if(!last || last.length==size){
            chunked.push([element]);
        } else{
            last.push(element);
        }
    }
    return chunked;
}

// Using slice.
function chunk(array, size) {
    const chunked = [];
    let index = 0;
    while(index < array.length){
        chunked.push(array.slice(index, index + size))
        index+=size;
    } 
    return chunked;
}

module.exports = chunk;
