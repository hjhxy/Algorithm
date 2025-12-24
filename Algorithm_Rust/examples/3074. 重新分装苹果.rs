impl Solution {
    pub fn minimum_boxes(apple: Vec<i32>, capacity: Vec<i32>) -> i32 {
        let mut sum = apple.iter().fold(0, |s, &el| s + el);
        let mut capacity = capacity;
        capacity.sort_by(|a, b| b.cmp(a));
        for i in 0..capacity.len() {
            if sum <= 0 {
                return i as i32;
            }
            sum -= capacity[i];
        }
        capacity.len() as i32
    }
}
