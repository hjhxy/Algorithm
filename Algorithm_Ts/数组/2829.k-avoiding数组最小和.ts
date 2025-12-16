function minimumSum(n: number, k: number): number {
    let i=1;
    let arr:Array<number> = [];
    while(i<=k/2 && arr.length<n) {
        arr.push(i);
        i++;
    }
    i = k;
    console.log('=', arr);
    while(arr.length < n) {
        arr.push(i);
        i++;
    }
    console.log(arr);
    return arr.reduce((sum, el)=>(sum + el), 0);
};


const res = minimumSum(5, 4);
console.log(res);

export {}