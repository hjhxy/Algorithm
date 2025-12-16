function search(nums: number[], target: number): boolean {
    return find(0, nums.length-1);
    function find(start: number, end: number):boolean {
        if(end < start) return false;
        if(start==end-1&&(nums[start]==target||nums[end]==target)) return true;
        let mid = Math.floor((start+end)/2);
        let res = false;
        if(target===nums[mid]) return true;
        if(nums[mid]<=nums[end]){
            if(target>nums[mid]&&target<=nums[end]){
                res = find(mid+1, end);
            } else {
                res = find(start, mid-1);
            }
        } else {
            if(target>nums[mid]){
                res = find(mid+1, end);
            } else {
                res = find(start, mid-1);
            }
        }
        return res;
    }
};

const res = search([1,0], 0);
console.log(res);


export {}