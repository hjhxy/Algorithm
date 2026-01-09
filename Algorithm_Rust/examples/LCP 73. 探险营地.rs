use std::collections::HashSet;

impl Solution {
    pub fn adventure_camp(expeditions: Vec<String>) -> i32 {
        if expeditions.is_empty() {
            return -1;
        }

        let mut known: HashSet<String> = HashSet::new();

        for camp in expeditions[0].split("->").filter(|s| !s.is_empty()) {
            known.insert(camp.to_string());
        }

        let mut max_new = 0usize;
        let mut ans = -1;

        for (i, record) in expeditions.iter().enumerate().skip(1) {
            let mut this_record_unique: HashSet<String> = HashSet::new();
            for camp in record.split("->").filter(|s| !s.is_empty()) {
                this_record_unique.insert(camp.to_string());
            }

            let new_count = this_record_unique
                .iter()
                .filter(|c| !known.contains(*c))
                .count();

            if new_count > max_new {
                max_new = new_count;
                ans = i as i32;
            }
            for c in this_record_unique {
                known.insert(c);
            }
        }

        if max_new == 0 {
            -1
        } else {
            ans
        }
    }
}
