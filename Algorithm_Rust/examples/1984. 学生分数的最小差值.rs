impl Solution {
    pub fn minimum_difference(nums: Vec<i32>, k: i32) -> i32 {
        let k = k as usize;
        let mut nums = nums.clone();
        nums.sort();
        let mut res = i32::MAX;
        let mut front = 0;
        let mut back = 0;
        while front<=back && back<nums.len() {
            if back - front < k-1 {
                back+=1;
            } else {
                res = res.min(nums[back] - nums[front]);
                front+=1;
            }
        }
        res
    }
}

fn main(){}