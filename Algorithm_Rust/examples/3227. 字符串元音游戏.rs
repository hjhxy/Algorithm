impl Solution {
    pub fn does_alice_win(s: String) -> bool {
        let arr = vec!['a', 'e', 'i', 'o', 'u'];
        for c in s.chars().into_iter(){
            if arr.contains(&c) {
                return true;
            }
        }
        false
    }
}


fn main(){

}