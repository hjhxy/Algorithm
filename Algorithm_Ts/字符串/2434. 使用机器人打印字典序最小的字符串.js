"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function robotWithString(s) {
    var res = [];
    var stack = [0]; // 存储入栈索引
    // 栈顶元素是输出还是继续添加主要是取决于剩余元素中是否有更小的元素
    var count = 10;
    var minindex = 0; // 栈中取，栈为空时在数组取
    while (res.length != s.length && count--) {
        var newindex = minindex + 1;
        for (var i = newindex + 1; i < s.length; i++) {
            if (s[i] < s[newindex] && res.indexOf(i) == -1) {
                newindex = i;
            }
        }
        minindex = newindex;
        var start = stack[stack.length - 1];
        console.log(minindex, start, s[minindex], s[start]);
        if (minindex != start) {
            while (start < minindex) {
                stack.push(start);
                start++;
            }
            res.push(minindex);
        }
        else { // 栈顶元素已经最大，直接出栈
            res.push(minindex);
            stack.pop();
        }
        console.log(res, stack);
    }
    return res.map(function (el) { return s[el]; }).join('');
}
;
var res = robotWithString("abba"); // sidnasddwqdsdwabdda
console.log(res);
