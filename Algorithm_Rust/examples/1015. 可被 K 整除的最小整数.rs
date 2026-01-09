use std::collections::HashSet;

impl Solution {
    pub fn smallest_repunit_div_by_k(k: i32) -> i32 {
        let mut set = HashSet::new();
        let mut n = 1 % k;
        let mut count = 1;
        loop {
            if n == 0 {
                return count;
            }
            if set.contains(&n) {
                return -1;
            }
            set.insert(n);
            n = (n * 10 + 1) % k;
            count += 1;
        }
    }
}

fn main() {}
