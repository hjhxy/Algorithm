use std::collections::{HashMap, HashSet};

impl Solution {
    pub fn maximum_total_damage(power: Vec<i32>) -> i64 {
        let mut set = HashSet::new();
        let mut map = HashMap::new();
        for &el in &power {
            set.insert(el);
            *map.entry(el).or_insert(0) += 1;
        }
        let mut newpower: Vec<i32> = set.into_iter().collect();
        newpower.sort();

        let mut memo = HashMap::new();
        let mut res = 0;
        for i in 0..newpower.len() {
            res = res.max(Solution::traval(i, &newpower, &map, &mut memo));
        }

        res
    }

    fn traval(
        index: usize,
        newpower: &Vec<i32>,
        map: &HashMap<i32, i32>,
        memo: &mut HashMap<usize, i64>,
    ) -> i64 {
        if let Some(&v) = memo.get(&index) {
            return v;
        }

        let mut res = 0;
        for i in index + 1..newpower.len() {
            if newpower[i] - 2 > newpower[index] {
                res = res.max(Solution::traval(i, newpower, map, memo));
            }
        }

        let val = res + (newpower[index] as i64 * *map.get(&newpower[index]).unwrap_or(&0) as i64);
        memo.insert(index, val);
        val
    }
}


fn main(){}