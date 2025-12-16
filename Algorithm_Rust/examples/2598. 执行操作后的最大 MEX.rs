use std::collections::HashMap;

impl Solution {
    pub fn find_smallest_integer(nums: Vec<i32>, value: i32) -> i32 {
        let mut map = HashMap::new();
        for el in nums.iter() {
            let el = ((*el % value)+value)%value; // 处理负数
            *map.entry(el).or_insert(0) += 1;
        }
        println!("{:?}", map);
        let mut i = 0;
        loop {
            let m = i % value;
            if let Some(v) = map.get_mut(&m) {
                if *v == 0 {
                    return i;
                } else {
                    *v -= 1;
                }
            } else {
                return i;
            }
            i += 1;
        }
        i
    }
}


fn main(){

}