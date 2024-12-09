// 死方法计算结果
function myPow_old(x: number, n: number): number {
    const start = Date.now();
    if (x == 1) return 1;
    if (x == -1) return n % 2 == 1 ? -1 : 1;
    let res = 1;
    if (n < 0) {
        x = 1 / x;
        // res * 8
        n = Math.abs(n);
    }
    // else if (n > 0 && n < 1) { }
    while (n--) {
        res *= x;
    }
    console.log(Date.now() - start, 'ms');
    return res;
};

// 尝试分解幂，减少重复计算
function myPow(x: number, n: number): number {
    const start = Date.now();
    if (x == 1) return 1;
    if (x == -1) return n % 2 == 1 ? -1 : 1;
    if (n < 0) {
        n = Math.abs(n);
        x = 1 / x;
    }
    let count = 1;
    let sum = x;
    // 累积计算结果，减少运算次数
    while (count < n) {
        sum *= sum;
        count *= 2;
    }
    if (count != n) {
        sum *= myPow(x, n - count);
    }
    console.log(Date.now() - start, 'ms');
    return sum;
};

const res1 = myPow_old(2, -2147483648);
console.log(res1);
const res = myPow(2, -2147483648);
console.log(res);