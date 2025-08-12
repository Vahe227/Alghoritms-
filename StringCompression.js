// The solution to this problem is under development because this solution is not effective in all cases.

/**
 * @param {character[]} chars
 * @return {number}
 */

var compress = function(chars) {
    let j = 0;
    let anotherCounts = [];
    let anotherLetters = [];
    let count = 1;
    for(let i = 0; i < chars.length;i++) {
        for(let k = 0;k < chars.length;k++) {
            if(chars[j] === chars[k]) {
                count++;
                chars.splice(i,1);
            };
        };
        console.log(chars);
        anotherCounts.push(count);
        count = 1;
        j++;
    };
    let y = 0;
    for(let i = 0;i < chars.length + 1;i++) {
        if(i % 2 !== 0) {
            chars.splice(i,0,anotherCounts[y]);
            y++;
        } else {
            continue;
        };
    };
    console.log(chars);
    return chars
};