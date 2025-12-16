function countCompleteSubarrays(nums: number[]): number {
    const set = new Set<number>(nums);
    const num = set.size;
    let front = 0,
        back = front;
    let hash:Record<number|string, number> = {};
    let count = 0;
    let res = 0;
    while(front <= back){
        while(count != num && back < nums.length){
            if(!hash[nums[back]]){
                count++;
                hash[nums[back]] = 1;
            } else {
                hash[nums[back]] += 1;
            }
            back++;
        }
        if(count == num) {
            res += nums.length - back + 1;
            console.log(count, num, front, back, nums.length - back + 1, nums.slice(front, back), hash);
        }
        if(hash[nums[front]]==1){
            count--;
        }
        hash[nums[front]] -= 1;
        front++;
    }
    return res;
};

const res = countCompleteSubarrays([459,459,962,1579,1435,756,1872,1597]);
console.log(res);