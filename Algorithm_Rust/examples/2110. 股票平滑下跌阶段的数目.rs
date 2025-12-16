impl Solution {
    pub fn get_descent_periods(prices: Vec<i32>) -> i64 {
        let mut res = 0;
        let mut count = 1;
        for (i, &el) in prices.iter().enumerate().skip(1) {
            if prices[i - 1] - el == 1 {
                count += 1;
            } else {
                res += count * (count + 1) / 2;
                count = 1;
            }
        }
        res + count * (count + 1) / 2
    }
}
