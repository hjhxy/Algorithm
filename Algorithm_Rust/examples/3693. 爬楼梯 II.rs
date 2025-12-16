#[derive(Clone, Debug)]
struct Dp {
    pre_i: Option<usize>,
    cost: usize,
}

impl Dp {
    fn new(pre_i: Option<usize>, cost: usize) -> Self {
        Self { pre_i, cost }
    }
}

impl Solution {
    pub fn climb_stairs(n: i32, costs: Vec<i32>) -> i32 {
        let n = n as usize;
        let mut dp = vec![Dp::new(None, 0); n];
        dp[0] = Dp::new(None, costs[0] as usize);

        for i in 1..n {
            let mut min_cost = usize::MAX;
            let mut pre = None;

            for step in [1, 2, 3] {
                if i >= step {
                    let candidate = dp[i - step].cost + costs[i] as usize;
                    if candidate < min_cost {
                        min_cost = candidate;
                        pre = Some(i - step);
                    }
                }
            }

            dp[i] = Dp::new(pre, min_cost);
        }

        println!("{:?}", dp);

        dp[n - 1].cost as i32
    }
}

fn main() {
    let costs = vec![1, 100, 2, 3, 1];
    println!("最小代价: {}", Solution::climb_stairs(5, costs));
}
