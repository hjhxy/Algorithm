use std::collections::HashMap;

impl Solution {
    pub fn partition_labels(s: String) -> Vec<i32> {
        let mut map = HashMap::new();
        for (i, c) in s.chars().enumerate() {
            map.insert(c, i); // 记录最后出现的位置
        }

        let mut max_index = 0;
        let mut start = 0;
        let mut res = vec![];

        for (i, c) in s.chars().enumerate() {
            max_index = max_index.max(*map.get(&c).unwrap());
            if i == max_index {
                res.push((i - start + 1) as i32);
                start = i + 1;
            }
        }
        res
    }
}



fn main(){}