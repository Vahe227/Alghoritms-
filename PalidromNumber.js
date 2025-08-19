// Problem 

// Given an integer x, return true if x is a palindrome, and false otherwise.

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// How I Solve This Problem

// To solve this problem, we first check if x is a negative number. If it is, we immediately return false.
// If x is non-negative, we proceed by creating two variables: original and reversed.
// original stores the initial value of x, because x will be modified in the following steps.
// reversed starts at 0 and will store the reversed digits of x.
// We then enter a while loop with the condition x > 0:
// Extract the last digit of x and store it in a variable called lastNum.
// Update reversed using the formula: reversed = (reversed * 10) + lastNum.
// Remove the last digit from x by dividing x by 10 and rounding down (integer division).
// This process repeats until x becomes 0.
// Finally, we return whether original is equal to reversed, which determines if the integer is a palindrome.
// The time complexity of this solution is O(N), where N is the number of digits in x.

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) return false;

    let original = x;
    let reversed = 0;
    while(x > 0) {
         let lastNum = x % 10;
         reversed = ( reversed * 10 ) + lastNum;
         x = Math.floor(x / 10);
    };
    return original === reversed;
}; 