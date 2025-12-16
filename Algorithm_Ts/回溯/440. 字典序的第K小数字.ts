function findKthNumber(n: number, k: number): number {
    const res = {
        count: 0,
        res: -1
    }

    let len = n.toString().length;
    for(let i=1;i<=9;i++){
        if(i>n) break;
        traval(n, i.toString(), len-1, res, k);
    }

    return res.res;
};

function traval(n: number, str: string, len: number, res:Record<'count'|'res', number>, k:number){
    res.count += 1;
    if(res.count==k ){ // && Number(str)<=n
        res.res = Number(str);
    }
    console.log(str, res.count);
    if(len<=0 || Number(str)>n || res.count>=k) return;
    for(let i=0;i<=9;i++){
        if(Number(str + i)>n) break;
        traval(n, str + i, len-1, res, k);
    }
}


const res = findKthNumber(13, 6);
console.log('res', res);

export {}