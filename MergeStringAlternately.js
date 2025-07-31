/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let word = '';
    let words = word1 + word2;
    for(let i = 0;i < words.length; i++) {
        if(i < word1.length) {
            word += word1[i];
        };
        if(i < word2.length) {
            word += word2[i];
        };
    };
    return word;
};