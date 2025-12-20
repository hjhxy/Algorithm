impl Solution {
    pub fn min_deletion_size(strs: Vec<String>) -> i32 {
        let mut res = 0;
        for i in 0..strs[0].len() {
            let mut pre = None;
            for j in 0..strs.len() {
                let c = strs[j].chars().nth(i).unwrap();
                if pre == None {
                    pre = Some(c);
                    continue;
                }
                if c >= pre.unwrap() {
                    pre = Some(c);
                } else {
                    res += 1;
                    break;
                }
            }
        }
        res
    }
}

fn main() {}
