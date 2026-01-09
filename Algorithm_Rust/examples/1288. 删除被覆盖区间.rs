impl Solution {
    pub fn remove_covered_intervals(intervals: Vec<Vec<i32>>) -> i32 {
        let mut intervals = intervals.clone();
        intervals.sort_by(|a, b|{
            if a[0]!=b[0] {
                return a[0].cmp(&b[0]);
            }
            return b[1].cmp(&a[1]);
        });
        let mut stack = vec![];
        for el in intervals.iter() {
            if let Some(s) = stack.last() {
                if el[0] >= s[0] && el[1] <= s[1] {
                    continue;
                }
            }
            stack.push(el);
        }
        println!("{:?}", intervals);
        stack.len() as i32
    }
}

fn main(){}