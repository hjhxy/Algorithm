function longestPalindrome(words: string[]): number {
    let res = 0;
    const arr:number[][] =[];
    let [c1, c2] = [-1, -1];
    for(let i=0;i<26;i++){
        arr[i] = [];
    }
    for(let i=0;i<words.length;i++){
        c1 = words[i].charCodeAt(0) - 97;
        c2 = words[i].charCodeAt(1) - 97;
        console.log(c1, c2, arr[c2][c1], arr[c1][c2])
        if(arr[c2][c1]) {
            res += 4;
            arr[c2][c1] -= 1;
            continue;
        }
        arr[c1][c2] = (arr[c1][c2]||0) + 1;
    }
    for(let i=0;i<arr.length;i++){
        if(arr[i][i]>0){
            res+=2;
            break;
        }
    }
    return res;
};


const res = longestPalindrome(["cc","ll","xx"]);
console.log(res);

export {}