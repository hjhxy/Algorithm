// 质数有个特点：就是不可在被分解，或者换句话说，2个质数的乘积唯一
function nthUglyNumber(n) {
    if (n == 1)
        return 1;
    var count = 1;
    var num = 2;
    var dp = {
        1: true,
    }; // 记录
    while (count != n) {
        if (isUgly(num, dp)) {
            dp[num] = true;
            // console.log(num, dp);
            count++;
        }
        else {
            dp[num] = false;
        }
        num++;
    }
    return num - 1;
}
;
function isUgly(num, dp) {
    while (num != 1) {
        if (dp[num] === false)
            return false;
        if (num % 2 == 0)
            num /= 2;
        else if (num % 3 == 0)
            num /= 3;
        else if (num % 5 == 0)
            num /= 5;
        else {
            return false;
        }
    }
    return true;
}
var starttime = Date.now();
var res = nthUglyNumber(1352);
console.log(res, Date.now() - starttime);
