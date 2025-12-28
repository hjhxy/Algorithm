impl Solution {
    pub fn maximal_square(matrix: Vec<Vec<char>>) -> i32 {
        let mut dp = Vec::with_capacity(matrix.len());
        let mut res = 0;
        for (i, line) in matrix.iter().enumerate() {
            dp.push(vec![0; matrix[i].len()]);
            for (j, &el) in line.iter().enumerate() {
                if matrix[i][j] == '0' {
                    dp[i][j] = 0;
                } else {
                    if i == 0 || j == 0 {
                        dp[i][j] = 1;
                    } else {
                        dp[i][j] = dp[i-1][j].min(dp[i][j-1]).min(dp[i-1][j-1]) + 1;
                    }
                    res = res.max(dp[i][j]);
                }
            }
        }

        println!("{:?}", dp);

        res * res
    }
}

fn main(){}