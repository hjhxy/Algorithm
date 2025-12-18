impl Solution {
    pub fn max_profit(prices: Vec<i32>, strategy: Vec<i32>, k: i32) -> i64 {
        let n = prices.len();
        let k = k as usize;

        if n == 0 || k == 0 || k > n || strategy.len() != n {
            return 0;
        }

        let mut sum = vec![0i64; n + 1];
        for i in 0..n {
            sum[i + 1] = sum[i] + strategy[i] as i64 * prices[i] as i64;
        }

        let half = k / 2;
        let mut cur_window_sum: i64 = 0;

        for i in half..k {
            cur_window_sum += prices[i] as i64;
        }

        let mut best_gain = 0i64;

        for j in (k - 1)..n {
            let strategy_cost = sum[j + 1] - sum[j + 1 - k];
            best_gain = best_gain.max(cur_window_sum - strategy_cost);

            if j + 1 < n {
                cur_window_sum += prices[j + 1] as i64;
            }
            if j + 1 >= half + 1 {
                cur_window_sum -= prices[j + 1 - half] as i64;
            }
        }

        let base_profit = sum[n];
        if best_gain > 0 {
            base_profit + best_gain
        } else {
            base_profit
        }
    }
}
