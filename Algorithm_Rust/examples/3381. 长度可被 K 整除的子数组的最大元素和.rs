use std::i64;

impl Solution {
    pub fn max_subarray_sum(nums: Vec<i32>, k: i32) -> i64 {
        let mut arr: Vec<i64> = vec![0];
        nums.iter().enumerate().for_each(|(i, &el)| {
            arr.push(arr[i] + nums[i] as i64);
        });

        let mut res = i64::MIN;
        let mut k = k as usize;
        nums.iter().enumerate().for_each(|(i, &el)| {
            let mut c: usize = 1;
            while k * c <= nums.len() {
                if k * c == i + 1 {
                    res = res.max(arr[i + 1]);
                } else if k * c < i + 1 {
                    res = res.max(arr[i + 1] - arr[i + 1 - k * c]);
                } else {
                    break;
                }
                c += 1;
            }
        });
        res
    }
}

fn main() {}
