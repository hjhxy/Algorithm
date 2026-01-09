use std::collections::HashSet;

impl Solution {
    pub fn remove_outer_parentheses(s: String) -> String {
        let mut stack = vec![];
        let mut index = 0;
        let mut str = String::from("");
        for (i, c) in s.chars().enumerate() {
            if c == '(' {
                stack.push("(");
            } else {
                stack.pop();
                if stack.len() == 0 {
                    str.push_str(&s[index+1..i+1]);
                    index = i+1;
                }
            }
        }
        let str = String::from("123");
        let set: HashSet<&str> = str.split("").collect();
        println!("{:?}", set);
        let arr:Vec<char> = str.chars().collect();
        for (i, el) in arr.iter().enumerate() {
            if *el != arr[arr.len()-i-1] {
                break;
            }
        }
        for s in set.into_iter() {

        }
        let title = String::from("First leTTeR of EACH Word");
        title.split(" ").map(|str|{
            if str.len()<3 {
                return String::from(str.to_lowercase());
            }
            let mut s = String::new();
            let s1 = str.chars().nth(0).unwrap().to_uppercase().collect::<String>();
            s.push_str(&s1);
            s.push_str(&str[1..].to_lowercase());
            s
        }).collect::<Vec<String>>().join(" ");
        str
    }
}

fn main (){

}