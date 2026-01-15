impl Solution {
    pub fn maximize_square_hole_area(n: i32, m: i32, h_bars: Vec<i32>, v_bars: Vec<i32>) -> i32 {
        let mut arr1 = h_bars;
        let mut arr2 = v_bars;
        arr1.sort();
        arr2.sort();
        let max1: i32 = Solution::get_count(&arr1);
        let max2: i32 = Solution::get_count(&arr2);
        (max1.min(max2) + 1).pow(2)
    }
    pub fn get_count(arr: &[i32]) -> i32 {
        let mut max = 1;
        let mut count = 1;
        for i in 1..arr.len() {
            if arr[i] - arr[i - 1] == 1 {
                count += 1;
            } else {
                max = max.max(count);
                count = 1;
            }
        }
        max = max.max(count);
        max
    }
}

fn main() {}
