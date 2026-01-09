use std::collections::HashMap;

impl Solution {
    pub fn avoid_flood(rains: Vec<i32>) -> Vec<i32> {
        let mut map = HashMap::new();
        let mut res = Vec::with_capacity(rains.len());
        for el in rains.iter() {
            if let Some(value) = map.get(el) {
                if *value == 0 {
                    map.insert(*el, 1);
                    res.push(-1);
                } else {
                    if let Some(zero) = map.get_mut(&0){
                        res.push(*el);
                        *zero -= 1;
                    } else {
                        return res;                    
                    }
                }
            } else {
                map.insert(*el, 1);
                res.push(-1);
            }
        }
        res
    }
}

fn main(){}