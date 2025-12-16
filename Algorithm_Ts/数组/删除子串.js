const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function() {
    let count = 0;
    let n = 0;
    let k = 0;
    let s = '';
    let ans = 0;

    while (line = await readline()) {
        if (count == 0) {
            let tokens = line.trim().split(' ').map(Number);
            n = tokens[0];
            k = tokens[1];
        } else if (count == 1) {
            s = line.trim();

            const pre = Array.from({ length: n + 1 }, () => new Array(26).fill(0));
            for (let i = 0; i < n; i++) {
                for (let c = 0; c < 26; c++) pre[i + 1][c] = pre[i][c];
                pre[i + 1][s.charCodeAt(i) - 97]++;
            }
            const suf = Array.from({ length: n + 1 }, () => new Array(26).fill(0));
            for (let i = n - 1; i >= 0; i--) {
                for (let c = 0; c < 26; c++) suf[i][c] = suf[i + 1][c];
                suf[i][s.charCodeAt(i) - 97]++;
            }

            let q = 1;
            for (let p = 0; p <= n - 1; p++) {
                if (q < p + 1) q = p + 1;
                while (q <= n) {
                    let ok = true;
                    for (let c = 0; c < 26; c++) {
                        if (pre[p][c] + suf[q][c] > k) { ok = false; break; }
                    }
                    if (ok) break;
                    q++;
                }

                if (q <= n) {
                    ans += (n - q + 1);
                }
            }

            if (ans > 0) ans -= 1;
            console.log(ans);
        }
        count++;
    }
}();
