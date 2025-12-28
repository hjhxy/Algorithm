impl Solution {
    pub fn count_valid_selections(nums: Vec<i32>) -> i32 {
        let sum = nums.clone().into_iter().reduce(|s, el|{s+el}).unwrap_or(0);
        let mut s = 0;
        let mut count = 0;
        for &el in nums.iter(){
            s+=el;
            if el != 0 {
                continue;
            }
            if s*2 == sum {
                count+=2;            
            } else if s*2 == sum+1 || s*2 == sum-1 {
                count+=1;
            }
        }
        count
    }
}

fn main(){}