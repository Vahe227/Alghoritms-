// The solution to this problem is under development because this solution is not effective in all cases.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

var strStr = function(haystack, needle) {
    let i = 0;
    let annotherStuck = 0;
    while(i < haystack.length) {
        if(haystack.substring(i,needle.length) == needle) {
            annotherStuck = 0;
            break;
        } else {
            i++;
            annotherStuck = -1;
            continue;
        };
    };
    return annotherStuck;
};
