use std::collections::HashMap;

impl Solution {
    pub fn remove_anagrams(words: Vec<String>) -> Vec<String> {
        let mut map = HashMap::new();
        let mut res = vec![];
        for el in words.iter() {
            let mut map1 = HashMap::new();
            for w in el.chars() {
                *map1.entry(w).or_insert(0) += 1;
            }
            println!("{:?} {:?}", map, map1);
            if map1.keys().len() != map.keys().len() {
                res.push(el.clone());
                map = map1;
            } else {
                let mut flag = true;
                for (&k, &v) in map1.iter() {
                    if let Some(&res) = map.get(&k) {
                        if res == v {
                            continue;
                        }
                    }
                    flag = false;
                    break;
                }
                if !flag {
                    res.push(el.clone());
                    map = map1;
                }
            }
        }
        res
    }
}

// impl Solution {
//     pub fn remove_anagrams(words: Vec<String>) -> Vec<String> {
//         let mut res = Vec::new();
//         let mut prev = [0; 26];

//         for word in words {
//             let mut freq = [0; 26];
//             for b in word.bytes() {
//                 freq[(b - b'a') as usize] += 1;
//             }

//             if freq != prev {
//                 res.push(word);
//                 prev = freq;
//             }
//         }

//         res
//     }
// }

fn main() {}
