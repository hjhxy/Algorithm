use std::collections::{HashMap, HashSet};

struct Tweet {
    user_id: i32,
    tweet_id: i32,
}

struct User {
    follower: HashSet<i32>,
    tweets: Vec<Tweet>,
}

struct Twitter {
    list: Vec<Tweet>,
    user: HashMap<i32, User>,
}

/**
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl Twitter {
    fn new() -> Self {
        Self {
            list: vec![],
            user: HashMap::new(),
        }
    }

    fn post_tweet(&mut self, user_id: i32, tweet_id: i32) {
        if !self.user.contains_key(&self.user) {
            self.follow(user_id, user_id);
        }
        self.list.push(Tweet { user_id, tweet_id });
        let users = &mut self.user;
        for user in 
    }

    fn get_news_feed(&self, user_id: i32) -> Vec<i32> {
        let user = self.user.get(&self.user).unwrap();
        let tweets = &user.tweets;
        tweets.iter().map(|tweet| tweet.tweet_id)
    }

    fn follow(&mut self, follower_id: i32, followee_id: i32) {
        let user = self.user.get_mut(&followee_id).unwrap();
        let follower = &mut user.follower;
        follower.insert(&follower_id);
    }

    fn unfollow(&self, follower_id: i32, followee_id: i32) {
        let user = self.user.get_mut(&followee_id).unwrap();
        let follower = &mut user.follower;
        follower.remove(&follower_id);
    }
}

fn main() {
    let obj = Twitter::new();
    obj.post_tweet(userId, tweetId);
    let ret_2: Vec<i32> = obj.get_news_feed(userId);
    obj.follow(followerId, followeeId);
    obj.unfollow(followerId, followeeId);
}
