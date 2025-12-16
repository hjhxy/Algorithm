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
function jump(nums: number[]): number{
    let count = 0;
    let index = nums.length - 1;
    while(index!=0){
        let m = index;
        for(let i=0;i<index;i++){
            if(i+nums[i]>=index){
                m=i;
                break;
            }
        }
        index = m;
        count++;
    }
    return count;
}

const res = jump([2,3,1,1,4]);
console.log(res);
