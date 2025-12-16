function numEquivDominoPairs(dominoes: number[][]): number {
    dominoes.sort((a, b)=>{
        let min1 = Math.min(...a);
        let min2 = Math.min(...b);
        let max1 = Math.max(...a);
        let max2 = Math.max(...b);
        if(min1 < min2) { 
            return -1;
        } else if(min1 == min2) {
            return max1 - max2;
        } else {
            return 1;
        }
    })

    let res = 0;
    let count = 1;

    for(let i=1;i<dominoes.length;i++){
        if((dominoes[i][0] == dominoes[i-1][0] && dominoes[i][1] == dominoes[i-1][1]) || (dominoes[i][0] == dominoes[i-1][1] && dominoes[i][1] == dominoes[i-1][0])){
            count++;
        } else {
            res += (count*(count-1))/2;
            count = 1;
        }
    }
    if(count!=1){
        res += (count*(count-1))/2;
    }
    
    console.log(dominoes);

    return res;
};


const res = numEquivDominoPairs([[2,2],[1,2],[1,2],[1,1],[1,2],[1,1],[2,2]]);
console.log(res);
export {}