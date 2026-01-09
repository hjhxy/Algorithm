use std::collections::{BTreeSet, HashMap};

#[derive(Eq, PartialEq, Clone)]
struct Movie {
    move_i: i32,
    shop_i: i32,
    price: i32,
}

impl Ord for Movie {
    fn cmp(&self, other: &Self) -> std::cmp::Ordering {
        self.price.cmp(&other.price)
            .then_with(|| self.shop_i.cmp(&other.shop_i))
            .then_with(|| self.move_i.cmp(&other.move_i))
    }
}

impl PartialOrd for Movie {
    fn partial_cmp(&self, other: &Self) -> Option<std::cmp::Ordering> {
        Some(self.cmp(other))
    }
}


struct MovieRentingSystem {
    not_rented: HashMap<i32, BTreeSet<Movie>>,
    rented: BTreeSet<Movie>,
    movies: HashMap<(i32, i32), Movie> // 方便快速地做增删
}


/** 
 * `&self` means the method takes an immutable reference.
 * If you need a mutable reference, change it to `&mut self` instead.
 */
impl MovieRentingSystem {

    fn new(n: i32, entries: Vec<Vec<i32>>) -> Self {
        let mut not_rented: HashMap<i32, BTreeSet<Movie>> = HashMap::new();
        let rented = BTreeSet::new();
        let mut movies = HashMap::new();
        for el in entries.into_iter() {
            let movie = Movie {
                move_i: el[1],
                shop_i: el[0],
                price: el[2]
            };
            let set = not_rented.entry(el[1]).or_insert(BTreeSet::new());
            set.insert(movie.clone());
            movies.insert((el[0], el[1]), movie);
        }
        Self { not_rented, rented, movies}
    }
    
    
    fn search(&mut self, movie: i32) -> Vec<i32> {
        let mut v: Vec<i32> = vec![];
        if let Some(set) = self.not_rented.get(&movie) {
            for el in set.iter().take(5) {
                v.push(el.shop_i);
            }
        }
        
        v
    }
    
    fn rent(&mut self, shop: i32, movie_id: i32) {
        if let Some(movie) = self.movies.get(&(shop, movie_id)).cloned() {
            if let Some(set) = self.not_rented.get_mut(&movie_id) {
                set.remove(&movie);   // O(log n)
            }
            self.rented.insert(movie); // O(log n)
        }
    }

    fn drop(&mut self, shop: i32, movie_id: i32) {
        if let Some(movie) = self.movies.get(&(shop, movie_id)).cloned() {
            self.rented.remove(&movie);               // O(log n)
            if let Some(set) = self.not_rented.get_mut(&movie_id) {
                set.insert(movie);                    // O(log n)
            }
        }
    }

    fn report(&self) -> Vec<Vec<i32>> {
        self.rented.iter()
            .take(5)
            .map(|m| vec![m.shop_i, m.move_i])
            .collect()
    }
}


/**
 * Your MovieRentingSystem object will be instantiated and called as such:
 * let obj = MovieRentingSystem::new(n, entries);
 * let ret_1: Vec<i32> = obj.search(movie);
 * obj.rent(shop, movie);
 * obj.drop(shop, movie);
 * let ret_4: Vec<Vec<i32>> = obj.report();
 */


fn main(){}