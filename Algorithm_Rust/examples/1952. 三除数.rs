impl Solution {
    pub fn is_three(n: i32) -> bool {
        if n<=2 {
            return false;
        }
        let s = (n as f32).sqrt();
        if s % 1.0 != 0.0 {
            return false;
        }
        for i in 2..s as i32 {
            if n % i == 0 {
                return false
            }
        }
        true
    }
}

fn main(){}