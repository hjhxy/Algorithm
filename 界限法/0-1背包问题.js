/**
 * 0-1背包问题不可以使用贪心算法，为什么？
 * 因为局部最优不一定全局最优，每次选用最优解可能会导致大量空间浪费，而剩余空间也许占比大，和重量关系大。
 * 可以使用贪心算法的是分数背包，不存在yes or no，可以拆分，知道装满为止，因此局部最优一定会导致全局最优。
 * 0-1背包可以使用回溯法，当然最好的是界限法，界限法是回溯法的一种最优解方案，通过界限函数预测可以实现剪枝优化。
 */


function bestbag(data) {
    // const tree = data.map(() => 0);
    traval(data);
}

// 优先队列
const queue = [];

function traval(tree, index = 0, current) {
    if (index === tree.length) {
        return;
    }
    const {
        value,
        weight
    } = tree;
    detect(index, current, capacity);
    detect(index, current, )
}

// 定义界限函数
function detect(index, current, capacity) {
    let all = current;

    return all;
}

// function bag(data, capacity) {
//     let max = [];
//     for (let i = 0; i < data.length; i++) {
//         const sum = traval(i, 0, data.length, [])
//         max.push(sum);
//     }

//     function traval(index, value, maxlen, res) {
//         // console.log(index, value, maxlen, res);
//         if (index >= maxlen) return res;
//         if (value + data[index][1] >= capacity) return res;
//         return traval(index + 1, value + data[index][1], maxlen, [...res, data[index]])
//     }
//     return max;
// }

const data = [
    [50, 10],
    [10, 20],
    [8, 20]
]

const res = bag(data, 40);
console.log(res);