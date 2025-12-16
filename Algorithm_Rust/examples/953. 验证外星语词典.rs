use std::collections::HashMap;

impl Solution {
    pub fn is_alien_sorted(words: Vec<String>, order: String) -> bool {
        let index: HashMap<char, usize> = order
            .chars()
            .enumerate()
            .map(|(i, c)| (c, i))
            .collect();

        for i in 1..words.len() {
            let w1: Vec<char> = words[i - 1].chars().collect();
            let w2: Vec<char> = words[i].chars().collect();
            let mut valid = false;

            for j in 0..w1.len().min(w2.len()) {
                let prev = index[&w1[j]];
                let curr = index[&w2[j]];

                if prev < curr {
                    valid = true;
                    break;
                } else if prev > curr {
                    return false;
                }
            }

            if !valid && w1.len() > w2.len() {
                return false;
            }
        }

        true
    }
}


fn main(){}