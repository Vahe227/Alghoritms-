/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^a-z0-9]/g, '');
    let reversedWord = '';
    for(let i = s.length - 1; i >= 0;i--) {
        reversedWord += s[i];
    };

    return s === reversedWord;
};