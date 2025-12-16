/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    let res = [];
    for(let i=0;i<n;i++) {
        let strarr = new Array(n).fill(".");
        strarr[i] = 'Q';
        traval([strarr.join("")], n, 0, res);
    }
    return res;
};


function traval(arr, n, row, res) {
    row++;
    if(row == n) return res.push(arr); // 最终可以完整退出的满足要求
    for(let i=0;i<n;i++) {
        let flag = true;
        for(let j=0;j<arr.length;j++){
            if(arr[j][i]=='Q'||arr[j][i-(row - j)]=='Q'||arr[j][i+(row-j)] == 'Q') { // 检测列
                flag = false;
                break;
            }
        }
        if(flag){
            let strarr = new Array(n).fill(".");
            strarr[i] = 'Q';
            traval([...arr, strarr.join("")], n, row, res);
        }
    }
}

const res = solveNQueens(5);
console.log(res);