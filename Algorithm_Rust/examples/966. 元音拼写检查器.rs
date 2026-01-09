use std::collections::HashMap;

impl Solution {
    pub fn spellchecker(wordlist: Vec<String>, queries: Vec<String>) -> Vec<String> {
        let mut res = vec![];
        let chars = vec!['a', 'e', 'i', 'o', 'u', 'A', 'E', 'O', 'U'];
        let hash1 = HashMap::new();
        let hash2 = HashMap::new();
        for word in wordlist.iter() {
            hash1.insert(word, word);
            hash2.insert(&word.to_lowercase(), word);
            let newword = String::new();
            for q in word.chars() {
                if chars.contains(&q) {
                    newword.push('0');
                } else {
                    chars.push(q);
                }
            }
        }
        let mut res = vec![];
        for query in queries.iter() {
            if let Some(v) = hash1.get(query) {
                res.push(**v);
            } else if let Some(v) = hash2.get(query) {
                res.push(**v);
            } else {
                if Solution::is_equal_special(query, ) {

                }
            }
        }
    }
    fn is_equal_special(s1: &str, s2: &str) -> bool {
        if s1.len() != s2.len() {
            return false;
        }
    
        let vowels = ['a', 'e', 'i', 'o', 'u'];
    
        for (c1, c2) in s1.chars().zip(s2.chars()) {
            let is_v1 = vowels.contains(&c1);
            let is_v2 = vowels.contains(&c2);
    
            if is_v1 && is_v2 {
                // 两个都是元音，可以不同 → 直接跳过
                continue;
            } else {
                // 至少有一个是辅音 → 必须相等
                if c1 != c2 {
                    return false;
                }
            }
        }
        true
    }
    
}



fn main(){}