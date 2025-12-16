use std::collections::HashMap;

struct NumberContainers {
    numbers: HashMap<i32, Vec<i32>>,
    indexs: HashMap<i32, i32>
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl NumberContainers {

    fn new() -> Self {
        NumberContainers {
            numbers: HashMap::new(),
            indexs: HashMap::new()
        }
    }
    
    fn change(&self, index: i32, number: i32) {
        if let Some(num) = self.indexs.get(&index) {
            if let Some(idxs) = self.numbers.get(num){
                if let Some(i) = idxs.iter().position(|&e| e==index) {
                    idxs.remove(index);
                }
            }
        }
        self.indexs.insert(index, number);
        if let Some(idxs) = self.numbers.get_mut(&number){
            idxs.push(index);
        } else {
            self.numbers.insert(number, vec![]);
        }
    }
    
    fn find(&self, number: i32) -> i32 {
        if let Some(idxs) = self.numbers.get(&number){
            let mut min = idxs[0];
            let mut index = 0;
            for (i, el) in idxs.iter().skip(n).enumerate(){
                if *el<min {
                    index = i + 1;
                }
            }
        } else {
            -1
        }
    }
}

// Your NumberContainers object will be instantiated and called as such:
fn main(){
    let obj = NumberContainers::new();
    obj.change(index, number);
    let ret_2: i32 = obj.find(number);
}

