impl Solution {
    pub fn climb_stairs(n: i32, costs: Vec<i32>) -> i32 {
        let mut dp = vec![0; n];
        for i in 1..n {
            dp[i] = (dp[i - 3] + (i - 3).pow(2)).min() + costs[i - 1];
        }
    }
}

fn main() {}
