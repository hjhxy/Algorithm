struct Bank {
    vec: Vec<i64>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Bank {
    fn new(balance: Vec<i64>) -> Self {
        Self {
            vec: balance.into_iter().map(|e| e).collect::<Vec<i64>>(),
        }
    }

    fn transfer(&mut self, account1: i32, account2: i32, money: i64) -> bool {
        let account1 = account1 as usize;
        let account2 = account2 as usize;
        if account1 > self.vec.len() || account2 > self.vec.len() || self.vec[account1 - 1] < money
        {
            return false;
        }
        self.vec[account1 - 1] -= money;
        self.vec[account2 - 1] += money;
        true
    }

    fn deposit(&mut self, account: i32, money: i64) -> bool {
        let account = account as usize;
        if account > self.vec.len() {
            return false;
        }
        self.vec[account - 1] += money;
        true
    }

    fn withdraw(&mut self, account: i32, money: i64) -> bool {
        let account = account as usize;
        if account > self.vec.len() || self.vec[account - 1] < money {
            return false;
        }
        self.vec[account - 1] -= money;
        true
    }
}

/**
 * Your Bank object will be instantiated and called as such:
 * let obj = Bank::new(balance);
 * let ret_1: bool = obj.transfer(account1, account2, money);
 * let ret_2: bool = obj.deposit(account, money);
 * let ret_3: bool = obj.withdraw(account, money);
 */

fn main() {}
