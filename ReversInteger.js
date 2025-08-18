// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x > 0) {
        let reversed = 0;

        while(x > 0) {
            let lastNum = x % 10;
            reversed = ( reversed * 10 ) + lastNum;
            x = Math.floor(x / 10);
        };
        if(reversed > 2147483647) {
            return 0;
        } else {
            return reversed;
        };
    } else {
        let reversed = 0;
        let plusX = Math.abs(x);
        while(plusX > 0) {
            console.log('Code Working');
            let lastNum = plusX % 10;
            reversed = ( reversed * 10) + lastNum;
            plusX = Math.floor(plusX / 10);
        };
        reversed = reversed * -1
        if(reversed < -2147483647) {
            return 0;
        } else {
            return reversed;
        };
    };
};