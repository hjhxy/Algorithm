impl Solution {
    pub fn large_group_positions(s: String) -> Vec<Vec<i32>> {
        let mut chars = s.chars().collect::<Vec<_>>();
        let mut count = 1;
        let mut res = vec![];
        for (i, &c) in chars.iter().skip(1).enumerate() {
            if c == chars[i] {
                count += 1;
            } else {
                if count >= 3 {
                    res.push(vec![(i - count + 1) as i32, i as i32]);
                }
                count = 1;
            }
        }
        if count >= 3 {
            res.push(vec![
                (chars.len() - 1 - count) as i32,
                (chars.len() - 1) as i32,
            ]);
        }
        res
    }
}

fn main() {}
