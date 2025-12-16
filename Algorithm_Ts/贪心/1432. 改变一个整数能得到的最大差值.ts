function maxDiff(num: number): number {
    const res = (num+"").split('');
    if(res[0] === '1') {
        const target = res[1];
        const str1 = res.map(el=>{
            if(el == target) return '0';
            return el;
        }).join('');
        const target2 = res.find(el=>el!='9');
        const str2 = res.map(el=>{
            if(el!=target2) return el;
            return '9';
        }).join('');
        console.log(str2, str1);
        return Number(str2) - Number(str1); 
    } else {
        const target = res[0];
        const str1 = res.map(el=>{
            if(el == target) return '1';
            return el;
        }).join('');
        const target2 = res.find(el=>el!='9');
        const str2 = res.map(el=>{
            if(el!=target2) return el;
            return '9';
        }).join('');
        console.log(str2, str1);
        return Number(str2) - Number(str1);
    }
};

const res = maxDiff(9288);
console.log(res);

export {}