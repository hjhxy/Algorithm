use std::collections::HashMap;

struct Status {
    status: bool,
    pre_time: usize,
}

impl Solution {
    pub fn count_mentions(number_of_users: i32, events: Vec<Vec<String>>) -> Vec<i32> {
        let mut res: Vec<i32> = vec![0; number_of_users as usize];
        let mut status_map = res
            .iter()
            .enumerate()
            .map(|el| {
                (
                    el.0,
                    Status {
                        status: true,
                        pre_time: *el.1 as usize,
                    },
                )
            })
            .collect::<HashMap<usize, Status>>();

        for msg in events.iter() {
            let time = msg[1].parse::<usize>().unwrap();
            match msg[0].as_str() {
                "MESSAGE" => match msg[2].as_str() {
                    "HREE" => {
                        for (&i, s) in status_map.iter_mut() {
                            if s.status {
                                res[i] += 1;
                            }
                            if !s.status && time - s.pre_time >= 60 {
                                res[i] += 1;
                                s.status = true;
                            }
                        }
                    }
                    "ALL" => {
                        for (&i, s) in status_map.iter_mut() {
                            if !s.status && time - s.pre_time >= 60 {
                                s.status = true;
                            }
                            res[i] += 1;
                        }
                    }
                    id => {
                        let keys = msg[2]
                            .split(" ")
                            .map(|el| el[2..].parse::<usize>().unwrap())
                            .collect::<Vec<usize>>();
                        for k in keys.iter() {
                            res[*k] += 1;
                        }
                    }
                },
                "OFFLINE" => {
                    if let Some(s) = status_map.get_mut(&(msg[2].parse::<usize>().unwrap())) {
                        s.status = false;
                        s.pre_time = time;
                    }
                }
                _ => {}
            }
        }

        res
    }
}

fn main() {}
