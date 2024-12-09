function guibingSort(arr) {
    if (arr.length <= 1)
        return arr;
    // 递归
    var mid = Math.floor(arr.length / 2);
    var leftArr = guibingSort(arr.slice(0, mid)); // 返回有序的left子数组
    var endArr = guibingSort(arr.slice(mid)); // 返回有序的right子数组
    // 核心代码，合并代价
    return merge(leftArr, endArr);
}
// 有序数组的合并，递归问题最大的性能消耗就是在做合并处理的函数体。
function merge(leftArr, rightArr) {
    var i = 0, j = 0;
    var res = [];
    while (i < leftArr.length && j < rightArr.length) {
        while (i < leftArr.length && leftArr[i] <= rightArr[j]) {
            res.push(leftArr[i++]);
        }
        while (j < rightArr.length && rightArr[j] <= leftArr[i]) {
            res.push(rightArr[j++]);
        }
    }
    while (i < leftArr.length) {
        res.push(leftArr[i++]);
    }
    while (j < rightArr.length) {
        res.push(rightArr[j++]);
    }
    return res;
}
/* 测试合并有序数组(双指针) */
// const sortedArr = merge([1, 4, 6, 8], [-1, 0, 5, 10]);
// console.log(sortedArr);
/* 归并排序 */
var arr = [6, 9, 3, 8, 0, -1, 10];
var newarr = guibingSort(arr);
console.log(newarr);
