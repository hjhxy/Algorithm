use std::collections::HashMap;

impl Solution {
    pub fn special_triplets(nums: Vec<i32>) -> i32 {
        let max: i32 = 10_i32.pow(9) + 7;
        let mut right_map = HashMap::new();
        for (i, &el) in nums.iter().enumerate() {
            *right_map.entry(el).or_insert(0) += 1;
        }
        let mut left_map = HashMap::new();
        let mut res = 0;

        for (i, &el) in nums.iter().enumerate() {
            if let Some(cnt) = right.get_mut(&v) {
                *cnt -= 1;
            }
            let right = right_map.get(&(2 * el)).unwrap_or(&0);
            let left = left_map.get(&(2 * el)).unwrap_or(&0);
            println!("{} {} {}", left, right, el);
            res = (res + (*right) * (*left)) % max;
            *left_map.entry(el).or_insert(0) += 1;
        }
        res % max
    }
}
