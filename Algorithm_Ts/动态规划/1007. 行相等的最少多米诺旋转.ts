function minDominoRotations(tops: number[], bottoms: number[]): number {
    const hash:Record<number, number> = {};
    for(let i=0;i<tops.length;i++){
        if(tops[i] == bottoms[i]) {
            hash[tops[i]] = (hash[tops[i]]||0) + 1;
        } else {
            hash[tops[i]] = (hash[tops[i]]||0) + 1;
            hash[bottoms[i]] = (hash[bottoms[i]]||0) + 1;
        }
    }
    let target: number;
    let count1 = 0,
        count2 = 0;
    if(hash[tops[tops.length-1]] == tops.length){
        target = tops[tops.length-1];
    } else if(hash[bottoms[bottoms.length-1]] == bottoms.length){
        target = bottoms[bottoms.length-1];
    } else {
        return -1;
    }
    for(let i=0;i<tops.length;i++){
        if(tops[i] == target) {
            count1++;
        }
        if(bottoms[i] == target){
            count2++;
        }
    }
    console.log('hash', hash, target, count1, count2);
    return Math.min(Math.min(count1, tops.length-count1), Math.min(count2, bottoms.length-count2));
};

const res = minDominoRotations([1,2,1,1,1,2,2,2], [2,1,2,2,2,2,2,2]);
console.log(res);

export {}