/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s = s.trim();

    let len = 0;
    for(let i = s.length - 1; i >= 0;i--) {
        if(s[i] !== ' ') {
            len++;
        } else if(len > 0) {
            break;
        };
    };
    return len;
};