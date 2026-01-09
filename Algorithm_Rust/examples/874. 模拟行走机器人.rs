use std::collections::HashSet;

pub fn robot_sim(commands: Vec<i32>, obstacles: Vec<Vec<i32>>) -> i32 {
    let dirs = [(0, 1), (1, 0), (0, -1), (-1, 0)];
    let mut dir_idx = 0;
    let mut x = 0;
    let mut y = 0;

    let obstacle_set: HashSet<(i32, i32)> = obstacles.into_iter()
        .map(|v| (v[0], v[1]))
        .collect();

    let mut max_dist_sq = 0;

    for cmd in commands {
        match cmd {
            -2 => {
                dir_idx = (dir_idx + 3) % 4;
            }
            -1 => {
                dir_idx = (dir_idx + 1) % 4;
            }
            k if k > 0 => {
                let (dx, dy) = dirs[dir_idx];
                let mut new_x = x;
                let mut new_y = y;

                for _ in 0..k {
                    let next_x = new_x + dx;
                    let next_y = new_y + dy;
                    if obstacle_set.contains(&(next_x, next_y)) {
                        break;
                    }
                    new_x = next_x;
                    new_y = next_y;
                }

                x = new_x;
                y = new_y;
                max_dist_sq = max_dist_sq.max(x * x + y * y);
            }
            _ => {}
        }
    }

    max_dist_sq
}



fn main(){}