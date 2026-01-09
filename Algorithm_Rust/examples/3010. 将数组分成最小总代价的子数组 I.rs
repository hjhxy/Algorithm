impl Solution {
    pub fn minimum_cost(nums: Vec<i32>) -> i32 {
        let mut res = nums[0];
        let mut arr = &mut (nums.clone())[1..];
        arr.sort_by(|a,b|{a.cmp(b)});

        res + arr[0] + arr[1]
    }
}


fn main(){
    
}