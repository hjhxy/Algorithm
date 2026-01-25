use std::collections::HashMap;

impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        let mut map = HashMap::new();
        for str in strs.iter() {
            let mut arr = str.chars().map(|c| c.to_string()).collect::<Vec<String>>();
            arr.sort();
            let s = arr.join("");
            let v = map.entry(s).or_insert(vec![]);
            v.push(str.to_string());
        }
        let mut res = vec![];
        for el in map.iter() {
            res.push(el.1.clone());
        }
        res
    }
}

fn main() {}
