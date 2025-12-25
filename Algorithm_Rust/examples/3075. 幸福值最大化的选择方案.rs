impl Solution {
    pub fn maximum_happiness_sum(happiness: Vec<i32>, k: i32) -> i64 {
        let mut happiness = happiness;
        happiness.sort_by(|a, b| b.cmp(a));
        let k = k as usize;
        let mut res: i64 = 0;
        for i in 0..k {
            res += (happiness[i] - i as i32).max(0) as i64;
        }
        res
    }
}
