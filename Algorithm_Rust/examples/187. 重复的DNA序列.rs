use std::collections::HashMap;

impl Solution {
    pub fn find_repeated_dna_sequences(s: String) -> Vec<String> {
        let mut start = 0;
        let mut end = 9;
        let mut map = HashMap::new();
        while end < s.len() {
            *map.entry(&s[start..=end]).or_insert(0) += 1;
            start += 1;
            end += 1;
        }
        map.into_iter()
            .filter(|el| el.1 > 1)
            .map(|el| el.0.to_string())
            .collect()
    }
}

fn main() {}
