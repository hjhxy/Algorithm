impl Solution {
    pub fn min_bitwise_array(nums: Vec<i32>) -> Vec<i32> {
        nums.iter()
            .map(|&el| {
                for i in 1..el {
                    if i | i + 1 == el {
                        return i;
                    }
                }
                -1
            })
            .collect()
    }
}
