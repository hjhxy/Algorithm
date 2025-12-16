function divide(dividend: number, divisor: number): number {
    let count = 0;
    let symbol = divisor * dividend < 0 ? -1 : 1;
    divisor = Math.abs(divisor);
    dividend = Math.abs(dividend);
    while (dividend >= divisor) {
        dividend -= divisor;
        count++;
    }
    const res = count * symbol;
    if (res > Math.pow(2, 31) - 1) {
        return res;
    } else if (res < -Math.pow(2, 31)) {
        return -Math.pow(2, 31);
    } else {
        return res;
    }
};

const res = divide(-7, -3);

console.log(res);
