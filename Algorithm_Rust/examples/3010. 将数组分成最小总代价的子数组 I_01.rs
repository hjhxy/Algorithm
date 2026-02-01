impl Solution {
    pub fn minimum_cost(nums: Vec<i32>) -> i32 {
        let mut first = i32::MAX;
        let mut second = i32::MAX;
        for i in 1..nums.len() {
            if nums[i] <= first && nums[i] < second {
                second = first;
                first = nums[i];
            } else if nums[i] < second {
                second = nums[i];
            }
            println!("{}-{}-{}", nums[i], first, second);
        }
        nums[0] + first + second
    }
}
