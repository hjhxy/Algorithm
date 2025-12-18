impl Solution {
    pub fn nth_ugly_number(n: i32) -> i32 {
        let n = n as usize;
        let mut dp = vec![1; n];
        let mut ptr_2 = 0;
        let mut ptr_3 = 0;
        let mut ptr_5 = 0;
        let mut index = 1;
        while index < n {
            let min = (dp[ptr_2] * 2).min(dp[ptr_3] * 3).min(dp[ptr_5] * 5);
            dp[index] = min;
            if dp[ptr_2] * 2 == min {
                ptr_2 += 1;
            } else if dp[ptr_3] * 2 == min {
                ptr_3 += 1;
            } else {
                ptr_5 += 1;
            }
        }
        println!("{:?}", dp);
        dp[n - 1]
    }
}

fn main() {}
