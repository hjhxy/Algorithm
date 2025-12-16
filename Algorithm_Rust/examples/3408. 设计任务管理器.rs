use std::cmp::Ordering;
use std::collections::{BinaryHeap, HashMap};

#[derive(Eq, PartialEq, Debug)]
struct Item {
    task_id: i32,
    priority: i32
}

impl Ord for Item {
    fn cmp(&self, other: &Self) -> Ordering {
        match self.priority.cmp(&other.priority) {
            Ordering::Equal => self.task_id.cmp(&other.task_id),
            other => other,
        }
    }
}


struct TaskManager {
    data: HashMap<i32, BinaryHeap<Item>>
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl TaskManager {

    fn new(tasks: Vec<Vec<i32>>) -> Self {
        let mut task_manager = Self {
            data: HashMap::new()
        };
        for user in tasks.iter() {
            let mut heap = BinaryHeap::new();
            heap.push(Item {
                task_id: user[1],
                priority: user[2],
            });
            task_manager.data.insert(user[0], heap);
        }
        task_manager
    }
    
    fn add(&self, user_id: i32, task_id: i32, priority: i32) {
        let heap = self.data.get_mut(&user_id).unwrap_or(&mut BinaryHeap::new());
        heap.push(Item {
            task_id,
            priority
        });
        self.data.insert(user_id, heap);
    }
    
    fn edit(&self, task_id: i32, new_priority: i32) {
        
    }
    
    fn rmv(&self, task_id: i32) {
        
    }
    
    fn exec_top(&self) -> i32 {
        for (user_id, task) in self.data {
            if 
        }
    }
}

/**
 * Your TaskManager object will be instantiated and called as such:
 * let obj = TaskManager::new(tasks);
 * obj.add(userId, taskId, priority);
 * obj.edit(taskId, newPriority);
 * obj.rmv(taskId);
 * let ret_4: i32 = obj.exec_top();
 */

fn main (){}