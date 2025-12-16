
// 题目：小红参加1000米比赛，班级里有n个人，小红当前跑了dis米，其他人跑的圈数作为第二行输入，求最好和最差的成绩，并列时小红最前（多个第三则小红第三）
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
    let count = 0;
    let n = 0, dis = 0;
    let ansBest = 1, ansWorst = 1;

    while (line = await readline()) {
        let tokens = line.trim().split(' ').map(Number);
        if (count === 0) {
            n = tokens[0];
            dis = tokens[1];
        } else if (count === 1) {
            for (let laps of tokens) {
                let minDist = laps * 400;
                let maxDist = Math.min(laps * 400 + 399, 1000);

                if (minDist > dis) ansBest++;

                if (maxDist > dis) ansWorst++;
            }

            console.log(ansBest, ansWorst);
        }
        count++;
    }
}();

