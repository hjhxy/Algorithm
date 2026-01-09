impl Solution {
    pub fn triangle_number(nums: Vec<i32>) -> i32 {
        let mut nums = nums;
        nums.sort();
        let mut i = 0;
        let mut j = 0;
        let mut k = nums.len()-1;
        let mut res = 0;
        while k>=2 {
            j = k-1;
            println!("{} {} {}", i, j, k);
            while i<j {
                if nums[i]+nums[j]>nums[k] {
                    res+=j-i;
                    j-=1;
                } else {
                    i+=1;
                }
            }
            k-=1;
        }
        res as i32
    }
}

fn main(){}