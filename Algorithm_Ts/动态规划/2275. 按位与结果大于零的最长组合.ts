function largestCombination(candidates: number[]): number {
    const hash:Record<string|number, number> = {};
    for(let i=0;i<candidates.length;i++){
        radix2(candidates[i], hash);
    }
    console.log(hash);
    const res = Object.keys(hash).map(k=>hash[k]);
    return Math.max(...res);
};

function radix2(number: number, hash: Record<string|number, number>){
    let i=0;
    let yu = 0;
    while(number!=0){
        yu = number % 2;
        number = (number-yu)/2;
        hash[i] = (hash[i]||0) + yu;
        i++;
    }
}

const res = largestCombination([16,17,71,62,12,24,14]);
console.log(res);

export {}