/**
 * @param {string} s
 * @return {number}
 */

var romanToInt = function(s) {
    let romeNumbers = {
        'I': 1,'V': 5,'X': 10,'L': 50,'C': 100,'D': 500,'M': 1000
    };
    let result = 0;
    for(let i = 0;i< s.length; i++) {
        if(i + 1 < s.length && romeNumbers[s[i]] < romeNumbers[s[i + 1]]) {
            result -= romeNumbers[s[i]];
        } else {
            result += romeNumbers[s[i]];
        };
    };
    return result;
};