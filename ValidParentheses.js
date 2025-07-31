/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
    let oppened = [], sonu = true;
    for(let i = 0; i < s.length;i++) {
        let value = s[i];

        if(value == '(' | value == '[' || value == '{') {
            oppened.push(value);
        } else {
            let prev = oppened.pop(), cal = prev + value;

            if(!(cal == '()' || cal == '[]' || cal == '{}')) {
                sonu = false;
                break;
            };
        };
    };
    return sonu && !oppened.length;
};