impl Solution {
    pub fn num_sub(s: String) -> i32 {
        let mut count: i64 = 0;
        let mut res: i64 = 0;
        let max = 1_000_000_007_i64;

        for c in s.chars() {
            if c == '1' {
                count += 1;
            } else {
                res = (res + count * (count + 1) / 2) % max;
                count = 0;
            }
        }

        res = (res + count * (count + 1) / 2) % max;
        res as i32
    }
}

fn main() {}
