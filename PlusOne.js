// The solution to this problem is under development because this solution is not effective in all cases.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length - 1]++;
    let anotherNum = [];
    if (digits.length == 1) {
        let num  = digits[0];
        return String(num).split('').map(Number);
    } else {
        return digits;
    };
};