use std::collections::HashMap;

impl Solution {
    pub fn count_covered_buildings(n: i32, mut buildings: Vec<Vec<i32>>) -> i32 {
        let mut hash_x = HashMap::new();
        let mut hash_y = HashMap::new();
        buildings.sort_by(|a, b| a[1].cmp(&b[1]));
        for v in buildings.iter() {
            hash_x.entry(v[0]).or_insert(vec![]).push(v[1]);
        }
        buildings.sort_by(|a, b| a[0].cmp(&b[0]));
        for v in buildings.iter() {
            hash_y.entry(v[1]).or_insert(vec![]).push(v[0]);
        }
        let mut res = 0;
        println!("{:?} {:?}", hash_x, hash_y);
        for v in buildings.iter() {
            if let Some(ys) = hash_x.get(&v[0]) {
                if v[1] > ys[0] && v[1] < ys[ys.len() - 1] {
                    if let Some(xs) = hash_y.get(&v[1]) {
                        if v[0] > xs[0] && v[0] < xs[xs.len() - 1] {
                            println!("{:?}", v);
                            res += 1;
                        }
                    }
                }
            }
        }

        res
    }
}

fn main() {}
