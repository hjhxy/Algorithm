use std::collections::HashMap;

impl Solution {
    pub fn count_trapezoids(points: Vec<Vec<i32>>) -> i32 {
        let mut map: HashMap<i32, i32> = HashMap::new();
        for point in points {
            *map.entry(point[1]).or_insert(0) += 1;
        }
        let mut res = 0;
        let mut arr = vec![];
        for (_, v) in &map {
            arr.push((*v) * (*v - 1) / 2);
        }
        for i in 0..arr.len() {
            for j in (i + 1)..arr.len() {
                res = (res + arr[i] * arr[j]) % (10_i32.pow(9) + 7);
            }
        }
        println!("{:?} {}", map, res);
        res % (10_i32.pow(9) + 7)
    }
}

fn main() {}
