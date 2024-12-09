function nonSpecialCount(l: number, r: number): number {
    let res = 0;
    let newl = Math.ceil(Math.sqrt(l));
    let newr = Math.floor(Math.sqrt(r));
    for (let i = newl; i <= newr; i++) {
        if (i == 1) continue; // 1是特殊情况
        let flag = true;
        let n = Math.sqrt(i);
        for (let j = 2; j <= n; j++) {
            if (i % j == 0) {
                flag = false;
                break;
            }
        }
        if (flag) {
            console.log(i * i, i, newl, newr);
            res++;
        }
    }
    return r - l + 1 - res;
}

let res = nonSpecialCount(4, 16);
console.log(res);