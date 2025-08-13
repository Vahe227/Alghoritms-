/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    let vovels = ['a','e','i','o','u'];
    let count = 0;
    if(count < k) {
        for(let i = 0; i < s.length; i++) {
            if(count >= k) {
                return count;
                break;
            };
            let word = vovels[i];
            for(let j = 0;j < s.length;j++) {
                if(word === s[j]) {
                    count++;
                    break; 
                } else {
                    continue;
                };
            };
        }; 
    } else {
        return count;
    };
    return count;
};