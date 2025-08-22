// Problem 

// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.

// The three functions are:

// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

// Example 1:

// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
// Example 2:

// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0

// How I Solve This Problem

// To solve this problem, we first declare a variable original that stores the initial value init. We then return an object containing three methods: increment, decrement, and reset.
// The increment method increases the value of original by 1 and returns the updated value.
// The decrement method decreases the value of original by 1 and returns the updated value.
// The reset method restores original back to the initial value init and then returns it.
// Since each method performs only a constant-time update and return, the time complexity for all operations is O(1).

/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let original = init;
    return {
        increment: () => {
            original += 1;
            return original;
        },
        decrement: () => {
            original -= 1;
            return original;
        },
        reset: () => {
            original = init;
            return original;
        }
    };
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */