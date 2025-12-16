function zeroFilledSubarray(nums: number[]): number {
    let front = 0;
    let back = 0;
    let res = 0;
    while(front<=back && back<nums.length){
        if(nums[back] == 0){
            back++;
        } else {
            console.log(front, back, res, (back-front)*(back-front+1)/2);
            res+=(back-front)*(back-front+1)/2;
            back++;
            front=back;
        }
    }
    return res;
};


const res = zeroFilledSubarray([1,3,0,0,2,0,0,4]);
console.log(res);

export {}