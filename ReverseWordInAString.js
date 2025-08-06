/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let text = ' ' + s + ' ';
    let word = '';
    let currentWord = '';
    let array = [];
    for(let i = 0; i < text.length;i++) {
        if(text[i] !== ' ') {
            word += text[i];
        } else {
            if(word !== '') {
                array.push(word);
                word = '';
            };
        };
    };
    for(let i = array.length - 1; i > -1;i--) {
        currentWord += array[i] + ' ';
    };

    return currentWord.trim();
};