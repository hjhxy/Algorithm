impl Solution {
    pub fn count_collisions(directions: String) -> i32 {
        let mut stack = vec![];
        let mut res = 0;
        let mut i: usize = 0;
        let chars: Vec<char> = directions.chars().collect();
        while i < chars.len() {
            println!("{:?}, {}, {}, {}", stack, i, chars[i], res);
            if stack.len() == 0 {
                stack.push(chars[i]);
                i += 1;
            } else if stack[stack.len() - 1] == 'S' {
                let mut flag = false;
                while i < chars.len() && chars[i] == 'L' {
                    res += 1;
                    i += 1;
                    flag = true;
                }
                stack.pop();
                while stack.len() != 0 {
                    if stack[stack.len() - 1] == 'R' {
                        res += 1;
                    }
                    stack.pop();
                }
                if !flag {
                    i += 1
                }
            } else if stack[stack.len() - 1] == 'R' && chars[i] == 'L' {
                stack.pop();
                stack.push('S');
                res += 2;
                i += 1;
            } else {
                stack.push(chars[i]);
                i += 1;
            }
        }
        if stack.len() != 0 && stack[stack.len() - 1] == 'S' {
            stack.pop();
            while stack[stack.len() - 1] == 'R' {
                res += 1;
                stack.pop();
            }
        }
        res
    }
}

fn main() {}
