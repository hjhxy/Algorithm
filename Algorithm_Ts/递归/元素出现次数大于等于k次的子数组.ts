// 找到某元素次数>=k次的子数组
// 双层for循环，超时
// function countSubarrays(nums: number[], k: number): number {
//     let res = 0;
//     let max = Math.max(...nums);
//     for (let i = 0; i < nums.length; i++) {
//         let count = 0;
//         for (let j = i; j < nums.length; j++) {
//             if (nums[j] >= max) {
//                 count++;
//             }
//             if (count >= k) {
//                 res++;
//             }
//         }
//     }
//     return res;
// };
function countSubarrays(nums: number[], k: number): number {
    let res = 0;
    let count = 0; // 记录每次滑动窗口中满足条件的元素数量
    let front = 0;
    let back = 0;
    let max = Math.max(...nums);
    while (front < nums.length) {
        if (nums[back] == max) {
            count++;
            while (count >= k && front <= back) { // 右边无需计算，都是满足条件的子数组
                // console.log('first', res, front, back, count, nums.slice(front, back + 1));
                res += (nums.length - back);
                if (nums[front++] == max) { // 指针右移
                    count--;
                }
                // console.log('secend', res);
            } // 至此当前元素开头的子数组全部统计完毕
        }
        if (back < nums.length - 1) { // 右指针继续前进
            back++;
        } else if (count < k) { // 遍历完仍然<k, 剩下元素都不满足，breaks
            break;
        }
    }

    return res;
};

const nums = [1, 3, 2, 3, 3];
const k = 2;
const res = countSubarrays(nums, k);
console.log(res);