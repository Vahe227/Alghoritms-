/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a, b) => b - a);
    let count = 1;
    for(let i = 0; i < citations.length;i++) {
        if(citations[i] >= count) {
            count++; 
        } else {
            break;
        };
    };
    return count - 1;
};