use std::collections::HashMap;

impl Solution {
    pub fn projection_area(grid: Vec<Vec<i32>>) -> i32 {
        let mut res = 0;
        let mut ys = vec![0; grid[0].len()];
        for (i, arr) in grid.into_iter().enumerate() {
            let mut max = 0;
            for (j, &el) in arr.iter().enumerate() {
                max = max.max(el);
                ys[j] = ys[j].max(el);
                res += if el>0 {1} else {0}; // z
            }
            res += max; // x
        }
        res + ys.into_iter().fold(0,|s, el| s+el)
    }
}

fn main(){}