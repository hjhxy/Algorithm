impl Solution {
    pub fn min_count(coins: Vec<i32>) -> i32 {
        coins.into_iter().fold(0, |s, el|{
            s + ((el as f32)/2.0).ceil() as i32
        })
    }
}

fn main(){
    let a = 1.1;
    a.ceil();
}