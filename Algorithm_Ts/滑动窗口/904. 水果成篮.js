"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function totalFruit(fruits) {
    var set = new Set();
    var hash = {};
    var res = 0;
    var left = 0, right = 0;
    while (left <= right && left < fruits.length && right < fruits.length) {
        if (set.size < 2 || (set.size == 2 && set.has(fruits[right]))) {
            set.add(fruits[right]);
            hash[fruits[right]] = (hash[fruits[right]] || 0) + 1;
            right += 1;
            console.log('--', left, right, set, hash, res);
        }
        else if (set.size == 2 && !set.has(fruits[right])) {
            res = Math.max(res, right - left);
            set.add(fruits[right]);
            hash[fruits[right]] = (hash[fruits[right]] || 0) + 1;
            right += 1;
            hash[fruits[left]] -= 1;
            if (hash[fruits[left]] <= 0) {
                set.delete(fruits[left]);
            }
            left += 1;
            console.log('++', left, right, set, hash, res);
        }
        else {
            hash[fruits[left]] -= 1;
            if (hash[fruits[left]] <= 0) {
                set.delete(fruits[left]);
            }
            left += 1;
        }
    }
    return Math.max(res, right - left);
}
;
var res = totalFruit([5, 9, 0, 9, 6, 9, 6, 9, 9, 9]);
console.log(res);
