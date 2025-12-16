function countOfSubstrings(word: string, k: number): number {
    let back = 0;
    let front = 0;
    let hash:{
        [key: string]: number;
    } = {
        a: 0,
        e: 0,
        i: 0,
        o: 0,
        u: 0,
        other: 0,
    };
    let res = 0;
    const map = ['a', 'e', 'i', 'o', 'u'];
    while(front < word.length && back <= front) {
        while(front < word.length && hash['other'] <= k) {
            let str = "";
            if(map.includes(word[front])){
                str = word[front];
            } else {
                str = "other";
            }
            hash[str]++;
            if(hash['other'] == k && check()){
                console.log(back, front, word.slice(back, front + 1), hash);
                res++;
            }
            front++;
        }
        let str = "";
        if(map.includes(word[back])){
            str = word[back];
        } else {
            str = "other";
        }
        console.log('=', front, str, hash[str]);
        hash[str]--;
        back++;
    }

    function check(){
        return map.every(el=>{
            if(el=='other'){
                return hash[el]==k;
            } else {
                return hash[el]>=1;
            }
        });
    }

    return res;
};


const res = countOfSubstrings("ieaouqqieaouqq", 1); // 3
console.log(res);


export {}