use std::collections::HashMap;

impl Solution {
    pub fn longest_consecutive(nums: Vec<i32>) -> i32 {
        let mut map = HashMap::new();
        let mut max = 0;
        for &el in nums.iter() {
            let pre = map.get(&(el - 1)).unwrap_or(&0);
            let last = map.get(&(el + 1)).unwrap_or(&0);
            let v = *pre + *last + 1;
            println!("{}, {}, {}", pre, last, el);
            max = max.max(v);
            map.insert(el, v);
        }
        max
    }
}

fn main() {}
