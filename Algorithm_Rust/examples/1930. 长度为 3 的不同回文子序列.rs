use std::collections::HashMap;

impl Solution {
    pub fn count_palindromic_subsequence(s: String) -> i32 {
        struct Location(i32, i32);
        let mut loc_map: HashMap<char, Location> = HashMap::new();
        let mut count_map = HashMap::new();
        for c in s.chars() {
            if loca
        }
    }
}

fn main() {}
