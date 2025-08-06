function reverseWordInAString(s) {
    let text = ' ' + s + ' ';
    let word = '';
    let currentWord = '';
    let array = [];
    for(let i = 0; i < text.length;i++) {
        if(text[i] !== ' ') {
            word += text[i];
        } else {
            array.push(word);
            word = '';
        };
    };
    console.log(array);
    for(let i = array.length - 1; i > 0;i--) {
        currentWord += array[i] + ' ';
    };
    for(let i = 0; i < currentWord.length; i++) {
        if(currentWord[0] == ' ') {
            currentWord[0] = '';
        } else if(currentWord[currentWord.length - 1] == ' ') {
            currentWord[currentWord.length - 1] = '';
        } else {
            continue;
        };
    };
    return currentWord;
};

let test = 'Hello I Am Vahe';
let result = reverseWordInAString(test);
console.log(result);
