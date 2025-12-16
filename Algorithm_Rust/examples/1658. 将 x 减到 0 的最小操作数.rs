impl Solution {
    pub fn min_operations(nums: Vec<i32>, x: i32) -> i32 {
        let sum = nums.clone()
            .into_iter()
            .reduce(|s,e| s+e)
            .unwrap_or(0);
        let mut start = 0;
        let mut end = 0;
        let mut s = 0;
        let mut res = i32::MAX;
        while end<nums.len() || (end==nums.len()&&s>sum-x) {
            if s<sum-x {
                s+=nums[end];
                end += 1;
            } else if s>sum-x {
                s-=nums[start];
                start += 1;
            } else {
                println!("{} {}", s, sum-x);
                res = res.min((nums.len() - (end-start)) as i32);
                s+=nums[end];
                end += 1;
            }
            println!("=={} {} {}", start, end, s);
        }
        if s == sum-x {
            println!("{} {} {}", start, end, s);
            res = res.min((nums.len() - (end-start)) as i32);
        }
        if res!=i32::MAX {
            res
        } else {
            -1
        }
    }
}

fn main(){}