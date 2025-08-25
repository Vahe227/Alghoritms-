// Problem

// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

// Note that minor deviation from millis in the actual sleep duration is acceptable.

// Example 1:

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });
// Example 2:

// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.

// How I Solve This Problem

// To solve this problem, we need to return a Promise that uses setTimeout. Inside the setTimeout, we call resolve, which will execute after the specified number 
// of milliseconds (passed as the second argument to setTimeout).
// It’s important to note that we resolve with an empty value, since the problem does not care about what value is returned, but rather when it is resolved. By 
// leveraging setTimeout, we can control this timing behavior.
// The time complexity of this solution is O(1).

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, millis);
    });
};

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */