impl Solution {
    pub fn count_negatives(grid: Vec<Vec<i32>>) -> i32 {
        grid.iter().fold(0, |sum, arr| {
            return sum
                + match Solution::find(arr) {
                    Some(v) => arr.len() as i32 - v,
                    None => 0,
                };
        })
    }
    // （非严格递减）查找第一个小于0的数字索引
    pub fn find(arr: &[i32]) -> Option<i32> {
        let mut left = 0usize;
        let mut right = arr.len();

        while left < right {
            let mid = left + (right - left) / 2;
            if arr[mid] < 0 {
                right = mid;
            } else {
                left = mid + 1;
            }
        }

        if left < arr.len() {
            Some(left as i32)
        } else {
            None
        }
    }
}
