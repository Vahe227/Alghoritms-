/**
 * @param {string} s
 * @return {boolean}
 */

var isNumber = function(s) {
    let allNumbers = {
        "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5,
        "6": 6, "7": 7, "8": 8, "9": 9
    };

    let state = false;
    for(let i = 0; i < s.length; i++) {
        if(allNumbers[s[i]] == s[i] || allNumbers[s[i + 1]] == s[i] || allNumbers[s[i + 2]] == s[i] || allNumbers[s[i + 3]] == s[i] || allNumbers[s[i + 4]] == s[i] || allNumbers[s[i + 5]] == s[i] || allNumbers[s[i + 6]] == s[i] || allNumbers[s[i + 7]] == s[i] || allNumbers[s[i + 8]] == s[i] || allNumbers[s[i + 9]] == s[i]) {
            state = true;
        } else {
            return false;
        };
    };
    return state;
};
