// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Iterative Solution: O(n)
function fib2(n) {
  var res = [0, 1];
  for (var i = 2; i <= n; i++) {
    res.push(res[i - 1] + res[i - 2]);
  }
  return res[res.length - 1];
}

// Recursive Solution: exponential. for every increase of n, we are going to get a dramatic increase of function calls for fib.
// you can improve it by avoiding extra function calls.
// memoization: store the arguements of each function call along with the result.
// if the function is called again with the same arguements, return the precomputed result,
// rather than running the function again.
function fib2(n) {
  if (n == 0) {
    return 0;
  }
  if (n == 1) {
    return 1;
  }
  return fib(n - 2) + fib(n - 1);
}

// Recursive Solution 2: exponential
function fib3(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 2) + fib(n - 1);
}

// Recursive Solution 3: improved memoization process
// Create cache object.
function memoize(fn) {
  const cache = {};
  return function(...args) {
    // defensive coding
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 2) + fib(n - 1);
}

fib = memoize(slowFib);

module.exports = fib;
