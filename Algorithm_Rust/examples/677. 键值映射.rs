#[derive(Clone, Debug)]
struct Item {
    key: String,
    val: i32
}

#[derive(Clone, Debug)]
struct MapSum {
    data: Vec<Item>,
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MapSum {

    fn new() -> Self {
        MapSum {
            data: vec![]
        }
    }
    
    fn insert(&mut self, key: String, val: i32) {
        let items = self.data.clone();
        for (index, item) in items.into_iter().enumerate() {
            if *item.key == key {
                self.data[index].val = val;
                return;
            }
        }
        self.data.push(Item { key, val});
    }
    
    fn sum(&self, prefix: String) -> i32 {
        println!("{:?}", self.data);
        let mut res = 0;
        for item in self.data.iter() {
            if *item.key.starts_with(prefix) {
                res += *item.val;
            }
        }
        res
    }
}

/**
 * Your MapSum object will be instantiated and called as such:
 * let obj = MapSum::new();
 * obj.insert(key, val);
 * let ret_2: i32 = obj.sum(prefix);
 */

fn main(){}