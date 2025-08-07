// The solution to this problem is under development because this solution is not effective in all cases.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    let state;
    if(s.length == 0 && t.length == 0) {
        return true;
    };
    if(s.length >= t.length) {
        return false;
    }
    if (s.length > 0) {
        for (let i = 0; i < s.length; i++) {
            let num = s[i];
            for (let j = 0; j < t.length; j++) {
                console.log('Code');
                if (num === t[j]) {
                    for(let k = 0; k < j;k++) {
                        if(s[i + 1] == t[k]) {
                            return false;
                        } else {
                            continue;
                        }
                    }
                    state = true;
                    break;
                } else {
                    state = false;
                    continue;
                };
            };
            if (state !== true) {
                state = false;
                break;
            };
        };
    } else {
        return true;
    };
    return state;
};