
// 质数有个特点：就是不可在被分解，或者换句话说，2个质数的乘积唯一
function nthUglyNumber(n: number): number {
    if (n == 1) return 1;
    let count = 1;
    let num = 2;
    let dp: { [key: number]: boolean } = {
        1: true,
    }; // 记录
    while (count != n) {
        if (isUgly(num, dp)) {
            dp[num] = true;
            // console.log(num, dp);
            count++;
        } else {
            dp[num] = false;
        }
        num++;
    }
    return num - 1;
};

function isUgly(num: number, dp: { [key: number]: boolean }): boolean {
    while (num != 1) {
        if (dp[num] === false) return false;
        if (num % 2 == 0) num /= 2;
        else if (num % 3 == 0) num /= 3;
        else if (num % 5 == 0) num /= 5;
        else {
            return false;
        }
    }
    return true;
}
const starttime = Date.now();
let res = nthUglyNumber(1352);

console.log(res, Date.now() - starttime);
