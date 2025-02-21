function containsNearbyDuplicate(nums: number[], k: number): boolean {
    let hash = {};
    let front = 0;
    let back = 0;
    while(back<nums.length) {
        while(back-front<=k&&back<nums.length){
            console.log(front, back, hash, hash[nums[back]]);
            if(!hash[nums[back]]){
                hash[nums[back]] = 1;
            } else {
                return true;
            }
            back++;
        }
        hash[nums[front]] -= 1;
        front++;
    }
    return false;
};


const res = containsNearbyDuplicate([1,2,3,1], 3);
console.log(res);


export {}