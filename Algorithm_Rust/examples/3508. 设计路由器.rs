use std::{cell::RefCell, rc::Rc};

#[derive(Debug, Clone)]
struct Packet {
    source: i32,
    destination: i32,
    timestamp: i32,
}

#[derive(Debug)]
struct Config {
    size: usize,   // 缓冲区最大容量
    start: usize,  // 当前起始索引
    end: usize,    // 当前结束索引
}

struct Router {
    packets: Rc<RefCell<Vec<Packet>>>,
    config: Rc<RefCell<Config>>,
}

impl Router {
    fn new(memory_limit: usize) -> Self {
        Router {
            packets: Rc::new(RefCell::new(vec![])),
            config: Rc::new(RefCell::new(Config {
                size: memory_limit,
                start: 0,
                end: 0,
            })),
        }
    }

    fn add_packet(&self, source: i32, destination: i32, timestamp: i32) -> bool {
        let packets = &self.packets;
        let mut config = self.config.borrow_mut();

        if packets
            .borrow()
            .iter()
            .any(|x| x.source == source && x.destination == destination && x.timestamp == timestamp)
        {
            return false;
        }

        packets.borrow_mut().push(Packet {
            source,
            destination,
            timestamp,
        });
        config.end += 1;

        while config.end - config.start > config.size {
            config.start += 1;
        }

        true
    }

    fn forward_packet(&self) -> Option<Vec<i32>> {
        let packets = self.packets.borrow();
        let mut config = self.config.borrow_mut();

        if config.start < config.end {
            if let Some(res) = packets.get(config.start) {
                config.start += 1;
                return Some(vec![res.source, res.destination, res.timestamp]);
            }
        }
        None
    }

    fn get_count(&self, destination: i32, start_time: i32, end_time: i32) -> i32 {
        let packets = self.packets.borrow();
        packets
            .iter()
            .filter(|el| {
                el.destination == destination
                    && el.timestamp >= start_time
                    && el.timestamp <= end_time
            })
            .count() as i32
    }
}



/**
 * Your Router object will be instantiated and called as such:
 * let obj = Router::new(memoryLimit);
 * let ret_1: bool = obj.add_packet(source, destination, timestamp);
 * let ret_2: Vec<i32> = obj.forward_packet();
 * let ret_3: i32 = obj.get_count(destination, startTime, endTime);
 */

fn main(){}