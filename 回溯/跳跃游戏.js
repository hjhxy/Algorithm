/* dp*/
// function jump(nums: number[]): number {
//     let dp:number[] = [0];
//     for(let i=1;i<nums.length;i++){
//         dp[i] = Infinity;
//         for(let j=0;j<i;j++){
//             // console.log(j, nums[j], dp[i], dp[j]+1);
//             if(nums[j]+j>=i){
//                 dp[i] = Math.min(dp[j]+1, dp[i]);
//             }
//         }
//     }
//     // console.log(dp);
//     return dp[nums.length-1];
// };
/* 贪心*/
function jump(nums) {
    var count = 0;
    var index = nums.length - 1;
    while (index != 0) {
        var m = index;
        for (var i = index; i >= 0; i--) {
            if (i + nums[i] >= index) {
                m = i;
            }
        }
        index = m;
        count++;
    }
    return count;
}
var res = jump([2, 3, 1, 1, 4]);
console.log(res);
