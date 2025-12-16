impl Solution {
    pub fn largest_perimeter(nums: Vec<i32>) -> i32 {
        nums.sort();
        let mut i = nums.len();
        let mut j = i-1;
        let mut k = i-2;
        while i>=2 {
            if nums[i]-nums[j] < nums[k] {
                return nums[i]+nums[j]+nums[k];
            }
            i -= 1;
        }
    }
}

fn main(){}