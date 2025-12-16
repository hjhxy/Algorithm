"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function maximumGain(s, x, y) {
    var res = 0;
    var stack = [];
    var i = 0;
    stack.push(s[i++]);
    var target = x > y ? {
        arr: ['b', 'a'],
        max: x,
        min: y,
    } : {
        arr: ['a', 'b'],
        max: y,
        min: x,
    };
    while (i < s.length) {
        if (stack.length && s[i] == target.arr[0] && stack[stack.length - 1] == target.arr[1]) {
            stack.pop();
            res += target.max;
            console.log(i);
        }
        else {
            stack.push(s[i]);
        }
        i++;
    }
    console.log(stack, res);
    if (stack.length) {
        var i_1 = 0;
        while (i_1 < stack.length) {
            if (stack.length && s[i_1] == target.arr[1] && stack[stack.length - 1] == target.arr[0]) {
                stack.pop();
                res += target.min;
                console.log(i_1);
            }
            else {
                stack.push(s[i_1]);
            }
            i_1++;
        }
    }
    return res;
}
;
var res = maximumGain("aabbaaxybbaabb", 5, 4);
console.log(res);
