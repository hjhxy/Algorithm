function xipai(arr: number[]):number[]{
    const res:number[] = new Array(arr.length);
    for(let i = 0; i < arr.length; i++) {
        let index = Math.floor(Math.random()*arr.length);
        while(res[index]!==undefined){ // 冲突的话，顺延
            index = (index+1)%arr.length;
        }
        // console.log(index, res);
        res[index] = arr[i];
    }
    return res;
}

const res = xipai([1,2,3,4,5,6,7,8,9]);
console.log(res);
