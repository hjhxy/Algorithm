use std::{collections::HashMap, i32};

impl Solution {
    pub fn max_difference(s: String) -> i32 {
        let mut hash = HashMap::new();
        for c in s.chars(){
            // hash.insert(c, *hash.get(&c).unwrap_or(&0));
            hash.en
        }
        let mut j_max = 0;
        let mut j_min = i32::MAX;
        let mut o_max = 0;
        let mut o_min = i32::MAX;
        for (_, v) in hash.clone().into_iter() {
            if v%2==1{
                j_max = j_max.max(v);
                j_min = j_min.min(v);
            } else {
                o_max = o_max.max(v);
                o_min = o_min.min(v);
            }
        }
        println!("{} {} {} {}", o_max, j_min, j_max, o_min);
        (o_max-j_min).max(j_max-o_min)
    }
}

fn main(){}