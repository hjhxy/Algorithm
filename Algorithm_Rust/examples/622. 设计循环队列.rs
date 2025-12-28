struct MyCircularQueue {
    vec: Vec<i32>,
    head: usize,
    back: usize,
    len: usize,
    capacity: usize,
}

impl MyCircularQueue {
    fn new(k: i32) -> Self {
        let k = k as usize;
        Self {
            vec: vec![0; k],
            head: 0,
            back: 0,
            len: 0,
            capacity: k,
        }
    }

    fn en_queue(&mut self, value: i32) -> bool {
        if (self.back + 1) % self.capacity == self.head {
            return false;
        }
        self.back = (self.back + 1) % self.capacity;
        self.vec[self.back] = value;
        self.len += 1;
        true
    }

    fn de_queue(&mut self) -> bool {
        if self.len == 0 {
            return false;
        }
        self.head = (self.head + 1) % self.capacity;
        self.len -= 1;
        true
    }

    fn front(&self) -> i32 {
        if self.len == 0 {
            -1
        } else {
            self.vec[self.head]
        }
    }

    fn rear(&self) -> i32 {
        if self.len == 0 {
            -1
        } else {
            self.vec[self.back]
        }
    }

    fn is_empty(&self) -> bool {
        self.len == 0
    }

    fn is_full(&self) -> bool {
        self.len == self.capacity
    }
}

fn main() {
    let obj = MyCircularQueue::new(k);
    let ret_1: bool = obj.en_queue(value);
    let ret_2: bool = obj.de_queue();
    let ret_3: i32 = obj.front();
    let ret_4: i32 = obj.rear();
    let ret_5: bool = obj.is_empty();
    let ret_6: bool = obj.is_full();
}
