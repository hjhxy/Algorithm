impl Solution {
    pub fn three_sum(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut nums = nums;
        nums.sort();
        let mut start = 0;
        let mut res = vec![];
        while start < nums.len() - 2 {
            if start != 0 && nums[start] == nums[start - 1] {
                start += 1;
                continue;
            }
            let mut mid = start + 1;
            let mut end = nums.len() - 1;
            while mid < end {
                if mid > start + 1 && nums[mid] == nums[mid - 1] {
                    mid += 1;
                    continue;
                }
                if end < nums.len() - 1 && nums[end] == nums[end + 1] {
                    end -= 1;
                    continue;
                }
                println!("{}, {}, {}", start, mid, end);
                let v = nums[start] + nums[mid] + nums[end];
                if v == 0 {
                    res.push(vec![nums[start], nums[mid], nums[end]]);
                    mid += 1;
                    end -= 1;
                } else if (v < 0) {
                    mid += 1;
                } else {
                    end -= 1;
                }
            }
            start += 1;
        }

        res
    }
}

fn main() {}
