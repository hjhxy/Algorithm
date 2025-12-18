impl Solution {
    pub fn triangular_sum(nums: Vec<i32>) -> i32 {
        let mut res = vec![nums.clone()];
        let len = nums.len();
        for i in 1..len {
            let mut vec = vec![];
            let last = res.last().unwrap();
            for j in 0..len-i {
                vec.push(last[j]+last[j+1]);
            }
            res.push(vec);
        }
        res.last().unwrap()[0]
    }
}


fn main(){}