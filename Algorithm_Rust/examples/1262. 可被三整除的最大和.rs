impl Solution {
    pub fn max_sum_div_three(nums: Vec<i32>) -> i32 {
        let mut dp: Vec<Vec<i32>> = Vec::new();
        let mut res = 0;
        for i in 0..3 {
            dp.push(vec![0; nums.len()]);
        }
        for i in 0..nums.len() {
            dp[(nums[i] % 3) as usize][i] = nums[i];
            for j in 0..i {
                for k in 0..3 {
                    let num = nums[i] + dp[k][j];
                    let idx = (num % 3) as usize;
                    if num > dp[idx][i] {
                        dp[idx][i] = num;
                    }
                    if idx == 0 {
                        res = res.max(dp[idx][i]);
                    }
                }
            }
        }
        println!("{:?}, {}", dp, res);
        res
    }
}

fn main() {}
