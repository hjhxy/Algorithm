impl Solution {
    pub fn max_two_events(events: Vec<Vec<i32>>) -> i32 {
        let mut res = 0;
        for i in 0..events.len() {
            res = res.max(events[i][2]);
            for j in (i + 1)..events.len() {
                if (events[i][1] <= events[j][0].min(events[j][1]))
                    || (events[i][0] >= events[j][0].max(events[j][1]))
                {
                    res = res.max(events[i][2] + events[j][2]);
                    if res == 5 {
                        println!("{} {}", i, j);
                    }
                }
            }
        }
        res
    }
}

fn main() {}
