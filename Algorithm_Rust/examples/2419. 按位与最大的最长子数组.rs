impl Solution {
    pub fn longest_subarray(nums: Vec<i32>) -> i32 {
        let mut max = 0;
        for (i, el) in nums.iter().enumerate() {
            max = max.max(*el);
        }
        let mut res = 0;
        let mut s = 0;
        for el in nums.iter() {
            if *el == max {
                s += 1;
            } else {
                res = res.max(s);
                s = 0;
            }
        }
        res
    }
}


fn main(){}