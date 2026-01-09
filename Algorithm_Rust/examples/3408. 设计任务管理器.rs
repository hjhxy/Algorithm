use std::collections::{BinaryHeap, HashMap, HashSet};

#[derive(Debug, Eq, PartialEq)]
struct Task {
    task_id: i32,
    priority: i32,
    users: HashSet<i32>,
}

impl Ord for Task {
    fn cmp(&self, other: &Self) -> Ordering {
        self.priority.cmp(&other.priority)
            .then_with(|| self.task_id.cmp(&other.task_id))
    }
}

struct TaskManager {
    users: HashMap<i32, BinaryHeap<&Task>>,
    tasks: HashMap<i32, Task>
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl TaskManager {

    fn new(tasks: Vec<Vec<i32>>) -> Self {
        Self {
            users: HashMap::new(),
            tasks: HashMap::new()
        }
    }
    
    fn add(&mut self, user_id: i32, task_id: i32, priority: i32) {
        let task = Task {
            task_id,
            priority,
            users: HashSet::from([user_id])
        };
        if let Some(task) = self.tasks.get_mut(&task_id) {
            task.users.insert(user_id);
        } else {
            self.tasks.insert(task_id, &task);
        }
        
        if let Some(user) = self.users.get_mut(&user_id) {
            user.push(&task);
        }
    }
    
    fn edit(&self, task_id: i32, new_priority: i32) {
        if let Some(task) = self.tasks.get_mut(&task_id) {
            task.priority = new_priority;
        }
        
    }
    
    fn rmv(&self, task_id: i32) {
        if self.tasks.contains_key(&task_id) {
            self.tasks.remove(&task_id)
        }
    }
    
    fn exec_top(&mut self) -> i32 {
        if !self.tasks.len() {
            return -1;
        }
        let mut task = Task {
            priority: 0,
            task_id: -1,
            users: HashSet::new()
        };
        for item in self.tasks.iter() {
            if *item.0 > task.priority {
                task = *item.1;
            }
        }
        for user in task.users.iter() {
            if let Some(heap) = self.users.get_mut(user){
                while let Some(t) = heap.pop() {
                    if  self.tasks.contains_key(&t.task_id) && t.task_id != task.task_id {
                        break;
                    }
                }
            }
        }
        self.tasks.remove(&task.task_id);
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

 fn main(){}