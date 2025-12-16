function foo(str: string): string[]{
    let res: string[] = [];
    for(let i=0;i<str.length;i++){
        traval(str[i], res, str, [i]);
    }
    return res;
}

function traval(s:string, res: string[], str: string, hasArr: number[]){
    if(hasArr.length>=str.length) {
        res.push(s);
    };
    for(let i=0;i<str.length;i++){
        if(hasArr.indexOf(i)==-1){
            traval(s+str[i], res, str, [...hasArr, i]);
        }
    }
}

const res = foo("abc");
console.log(res);

export {}