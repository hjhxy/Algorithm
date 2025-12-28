use std::collections::HashMap;

impl Solution {
    pub fn max_frequency_elements(nums: Vec<i32>) -> i32 {
        let mut map = HashMap::new();
        let mut m: i32 = 0;
        let mut res = 0;
        for el in nums.into_iter() {
            if let Some(v) = map.get_mut(&el){
                *v+=1;
                m = m.max(*v);
            } else {
                map.insert(el, 1);
                m = m.max(1);
            }
        }
        for (k, v) in map.iter() {
            if *v == m {
                res+=v;
            }
        }
        res
    }
}

fn main(){}