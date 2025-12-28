use std::collections::HashMap;

impl Solution {
    pub fn max_freq_sum(s: String) -> i32 {
        let mut map:HashMap<char, i32> = HashMap::new();
        for c in s.chars() {
            let v = map.get(&c).unwrap_or(&0);
            map.insert(c, *v+1);
        }
        let yuanyin = ['a', 'e', 'i', 'o', 'u'];
        let mut y = 0;
        let mut f = 0;
        for (key, value) in map {
            if yuanyin.contains(&key) {
                y = y.max(value);
            } else {
                f = f.max(value);
            }
        }
        y+f
    }
}

fn main(){}