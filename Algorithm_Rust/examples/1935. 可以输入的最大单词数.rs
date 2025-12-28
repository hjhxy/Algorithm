impl Solution {
    pub fn can_be_typed_words(text: String, broken_letters: String) -> i32 {
        let letters: Vec<char> = broken_letters.chars().into_iter().collect();
        text.split(" ").into_iter().fold(0, |sum, el|{
            let mut flag = false;
            for c in el.chars() {
                if letters.contains(&c){
                    flag = true;
                    break;
                }
            }
            println!("{:?}  {:?}", el, letters);
            return sum + if flag {0} else {1}
        })
    }
}

fn main(){}