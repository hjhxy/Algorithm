function reorderedPowerOf2(n: number): boolean {
    const str = n.toString();
    const powSet = getPowSet();
    let flag = false;
    for(let i=0;i<str.length;i++){
        if(str[i]!='0'){
            traval(str[i], new Set([i]));
        }
    }

    function getPowSet(): Set<number>{
        const pow2 = new Set<number>();
        const start = Math.pow(10, str.length-1);
        const end = Math.pow(10, str.length);
        let res = 1;
        while(res<end){
            if(res>=start){
                pow2.add(res);
            }
            res*=2;
        }
        return pow2;
    }

    function traval(s: string, set: Set<number>){
        if((flag || s.length == str.length)) {
            if(powSet.has(Number(s))) {
                flag = true;
                console.log(s, powSet.has(Number(s)));
            }
            return;
        }
        for(let i=0;i<str.length;i++) {
            if(!set.has(i)){
                let set1 = new Set(set);
                set1.add(i);
                traval(s+str[i], set1);
            }
        }
    }
    
    console.log(powSet);
    return flag;
};

const res = reorderedPowerOf2(821);
console.log(res);

export {}