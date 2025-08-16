/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    if(numbers.length <= 10) {
        for(let i = 0; i < numbers.length;i++) {
            for(let j = 1;j < numbers.length;j++) {
                if(numbers[i] + numbers[j] === target && i !== j) {
                    return [i + 1,j + 1];
                };
            };
        };
    } else {
        for(let i = 0; i < numbers.length;i++) {
            for(let j = 1;j < numbers.length;j++) {
                if(numbers[i] + numbers[j] === target) {
                    return [i + 1,j + 1];
                };
            };
        };  
    }; 
};