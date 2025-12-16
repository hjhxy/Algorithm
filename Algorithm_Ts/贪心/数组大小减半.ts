function minSetSize(arr: number[]): number {
    const hash:{[key:string]:number} = {};
    for(let i = 0; i < arr.length; i++) {
        if(hash[arr[i]]){
            hash[arr[i]]+=1;
        } else {
            hash[arr[i]] = 1;
        }
    }
    // const arr1 = Object.values(hash).sort((a,b)=>(b-a));
    const arr1:number[] = [];
    for(const key in hash){
        arr1.push(hash[key]);
    }
    arr1.sort((a, b)=>(b - a));
    let res = 0;
    let sum = 0;
    while(sum < arr.length/2){
        sum += arr1[res];
        res++;
    }
    // console.log(arr1, res);
    return res;
};


const res = minSetSize([3,3,3,3,5,5,5,2,2,7]);
console.log(res);
