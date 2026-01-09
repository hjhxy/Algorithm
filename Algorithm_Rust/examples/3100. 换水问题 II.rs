impl Solution {
    pub fn max_bottles_drunk(num_bottles: i32, num_exchange: i32) -> i32 {
        let mut res =  num_bottles;
        let mut empty = num_bottles;
        let mut num_exchange = num_exchange;
        while empty >= num_exchange {
            res += 1;
            empty -= num_exchange;
            empty += 1;
            num_exchange += 1;
        }
        res
    }
}

fn main(){}