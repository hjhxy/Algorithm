function sortArrayByParityII(nums: number[]): number[] {
    let arr1:number[] = [];
    let arr2:number[] = [];
    for(let i=0;i<nums.length;i++){
        if(nums[i] % 2 === 0){
            arr1.push(nums[i]);
        } else {
            arr2.push(nums[i]);
        }
    }
    let res:number[] = [];
    let i=0, j=0;
    while(i<arr1.length&&j<arr2.length){
        res.push(arr1[i]);
        res.push(arr2[j]);
        i+=1;
        j+=1;
    }
    return res;
};

const res = sortArrayByParityII([4,2,3,1,5]);
console.log(res);