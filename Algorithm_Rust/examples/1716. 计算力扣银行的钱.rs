impl Solution {
    pub fn total_money(n: i32) -> i32 {
        let weeks = n / 7;
        let days = n % 7;
        let mut s = 0;
        s += weeks * (28 + 28 + (weeks - 1) * 7) / 2;
        for i in 1..=days {
            s += (i + weeks);
        }
        s
    }
}

fn main() {}
