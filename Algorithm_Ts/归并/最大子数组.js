function maxArr(arr = []) {
    if (arr.length <= 1) return arr[0] || 0;
    let mid = Math.floor(arr.length / 2);
    let left = maxArr(arr.slice(0, mid));
    let right = maxArr(arr.slice(mid));
    let midvaluel = -Infinity;
    let midvaluer = -Infinity;
    arr.slice(0, mid).reduceRight((s, e) => {
        if (s + e >= midvaluel) midvaluel = s + e;
        return s + e
    }, 0);
    arr.slice(mid).reduce((s, e) => {
        if (s + e >= midvaluer) midvaluer = s + e;
        return s + e
    }, 0);
    // console.log(mid, arr.slice(0, mid), arr.slice(mid), left, right, midvaluel, midvaluer);
    return Math.max(left, right, Math.max(midvaluel, 0) + Math.max(midvaluer, 0));
}

// 最大子数组
let arr = [1, -3, 2, -1, 0, 5, -3];
let res = maxArr(arr);
console.log(res);