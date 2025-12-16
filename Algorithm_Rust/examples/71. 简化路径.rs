impl Solution {
    pub fn simplify_path(path: String) -> String {
        let mut stack = vec![];
        let mut dot = 0;
        for c in path.chars() {
            if c == '.' {
                dot += 1;
            } else {
                if dot == 1 && c == '/' {
                    Solution::resolve(&mut stack, c, 0);
                } else if dot == 2 {
                    if stack.len() != 1 && c=='/' {
                        Solution::resolve(&mut stack, '.', -1);
                        stack.push('/');
                    } else {
                        while dot !=0 {
                            stack.push('.');
                            dot-=1;
                        }
                        stack.push(c);
                    }
                } else if dot >=3 {
                    while dot !=0 {
                        stack.push('.');
                        dot-=1;
                    }
                    stack.push('/');
                } else {
                    Solution::resolve(&mut stack, c, 1);
                }
                dot = 0;
            }
            // println!("{} {:?}", dot, stack)
        }
        if dot == 1 {
            Solution::resolve(&mut stack, '.', 0);
        } else if dot == 2 {
            if stack.len() != 1 {
                Solution::resolve(&mut stack, '.', -1);
            }
        } else if dot >=3 {
            while dot !=0 {
                stack.push('.');
                dot-=1;
            }
        }
        while let Some(c) = stack.last() {
            if *c == '/' && stack.len() > 1 { // 根目录保留
                stack.pop();
            } else {
                break;
            }
        }
        stack.into_iter().collect()
    }
    pub fn resolve(stack: &mut Vec<char>, c: char, num: i32){  // -1 表示回退一级，否则push
        if num ==0 {
            return;
        } else if num == -1 {
            let mut count = 0;
            while let Some(char) = stack.pop() {
                if char == '/' {
                    count+=1;
                }
                if count == 2 {
                    break;
                }
            }
        } else {
            if let Some (res) = stack.last() {
                if *res == '/'  && c == '/' {
                    return;
                } else {
                    stack.push(c);
                }
            } else {
                stack.push(c);
            }
        }
    }
}


fn main(){}