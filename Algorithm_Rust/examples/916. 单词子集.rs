use std::collections::HashMap;

impl Solution {
    pub fn word_subsets(words1: Vec<String>, words2: Vec<String>) -> Vec<String> {
        let mut res: Vec<String> = vec![];
        let mut map: HashMap<char, i32> = HashMap::new();
        for el in words2.iter() {
            let mut map1: HashMap<char, i32> = HashMap::new();
            for c in el.chars() {
                *map1.entry(c).or_insert(0) += 1;
            }
            for m in map1.iter(){
                if let Some(res) = map.get_mut(m.0){
                    *res = (*res).max(*m.1);
                } else {
                    map.insert(m.0, m.1);
                }
            }
        }

        for el in words1.iter() {
            let mut map1: HashMap<char, i32> = HashMap::new();
            for c in el.chars() {
                *map1.entry(c).or_insert(0) += 1;
            }
            let flag = true;
            for m in map.iter(){
                if let Some(res) = map1.get(m.0){
                    if *res<*m.1 {
                        flag = false;
                        break;
                    }
                } else {
                    flag = false;
                    break;
                }
            }
            if flag {
                res.push(el.clone().to_string());
            }
        }
        res
    }
}


fn main(){}