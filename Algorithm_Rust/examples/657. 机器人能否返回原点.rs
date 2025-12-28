impl Solution {
    pub fn judge_circle(moves: String) -> bool {
        let mut state: (i32, i32) = (0, 0);
        moves.chars().for_each(|el| match el {
            'R' => {
                state.0 += 1;
            }
            'L' => {
                state.0 -= 1;
            }
            'U' => {
                state.1 += 1;
            }
            'D' => {
                state.1 -= 1;
            }
            _ => {}
        });
        println!("{:?}", state);
        state.0 == 0 && state.1 == 0
    }
}

fn main() {}
