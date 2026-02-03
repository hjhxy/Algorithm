impl Solution {
    pub fn is_trionic(nums: Vec<i32>) -> bool {
        if nums.len() < 3 {
            return false;
        }
        let mut i = 1;
        let mut start = i;
        while i < nums.len() && nums[i] > nums[i - 1] {
            i += 1;
        }
        if start == i {
            return false;
        }
        let mut start = i;
        while i < nums.len() && nums[i] < nums[i - 1] {
            i += 1;
        }
        if start == i {
            return false;
        }
        let mut start = i;
        while i < nums.len() && nums[i] > nums[i - 1] {
            i += 1;
        }
        if start == i {
            return false;
        }

        i == nums.len()
    }
}
