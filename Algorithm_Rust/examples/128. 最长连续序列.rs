use std::collections::HashSet;

impl Solution {
    pub fn longest_consecutive(nums: Vec<i32>) -> i32 {
        let mut set = HashSet::new();
        nums.iter().for_each(|&el| {
            set.insert(el);
        });
        let mut res = 0;
        println!("{:?}", set);
        for &el in set.iter() {
            if !set.contains(&(el - 1)) {
                let mut v = el;
                let mut count = 0;
                while set.contains(&v) {
                    v += 1;
                    count += 1;
                }
                res = res.max(count);
            }
        }

        res
    }
}

fn main() {}
