function divide(dividend, divisor) {
    var count = 0;
    var symbol = divisor * dividend < 0 ? -1 : 1;
    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend);
    // let sum = divisor;
    while (dividend >= divisor) {
        dividend -= divisor;
        count++;
    }
    return count * symbol;
}
;
var res = divide(-7, -3);
console.log(res);
