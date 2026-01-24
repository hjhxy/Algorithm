use std::collections::HashSet;

impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        let mut set = HashSet::new();
        let mut res = 0;
        let mut count = 0;
        let chars: Vec<char> = s.chars().collect();
        let mut front = 0;
        let mut back = 0;
        while front < chars.len() {
            if !set.contains(&chars[front]) {
                set.insert(chars[front]);
                front += 1;
            } else {
                while chars[back] != chars[front] {
                    set.remove(&chars[back]);
                    back += 1;
                }
                set.remove(&chars[back]);
                back += 1;
            }
            println!("{:?}", set);
            count = count.max(front - back);
        }
        res
    }
}

fn main() {}
