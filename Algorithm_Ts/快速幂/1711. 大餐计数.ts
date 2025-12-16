function countPairs(deliciousness: number[]): number {
    const res: number[] = [];
    for(let i=0;i<deliciousness.length;i++){
        for(let j=i+1;j<deliciousness.length;j++){
            if(isAnswer(deliciousness[i]+deliciousness[j])){
                res.push(deliciousness[i]+deliciousness[j]);
                // res.add(`${deliciousness[i]},${deliciousness[j]}`);
            }
        }
    }
    // console.log(set, res);
    return res.length;
};

function isAnswer(num: number){
    if(num == 0 || Math.floor(num)!==num) return false;
    if(num==1 || num == 2) return true;
    let x = 2;
    while(x<Math.sqrt(num)){
        x = Math.pow(x, 2);
    }
    if(x==Math.sqrt(num)) return true;
    let res = num/x;
    return isAnswer(res);
}


const res = countPairs([2160,1936,3,29,27,5,2503,1593,2,0,16,0,3860,28908,6,2,15,49,6246,1946,23,105,7996,196,0,2,55,457,5,3,924,7268,16,48,4,0,12,116,2628,1468]);
console.log(res);

export {}