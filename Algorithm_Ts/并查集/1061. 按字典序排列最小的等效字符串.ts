function smallestEquivalentString(s1: string, s2: string, baseStr: string): string {
    const arr: Array<Set<string>> = [];
    for(let i=0;i<s1.length;i++){
        let flag = false;
        let set1 = -1;
        let set2 = -1;
        for(let j=0;j<arr.length;j++){
            if(arr[j].has(s1[i])){
                set1 = j;
                arr[j].add(s1[i]);
                arr[j].add(s2[i]);
                flag = true;
            }
            if(arr[j].has(s2[i])){
                set2 = j;
                arr[j].add(s1[i]);
                arr[j].add(s2[i]);
                flag = true;
            }
        }
        // 不在同一个集合需要合并
        if(set1 != set2 && set1!=-1 && set2!=-1){
            for(const v of arr[set2]){
                console.log(arr[set2], v)
                arr[set1].add(v);
            }
            arr.splice(set2, 1);
        }
        if(!flag){
            arr.push(new Set([s1[i], s2[i]]))
        }
        console.log(set1, set2, s1[i], s2[i], arr);
    }
    const newres:string[][] = [];
    for(let i=0;i<arr.length;i++){
        newres.push([...arr[i]]);
    }
    for(let i=0;i<baseStr.length;i++){
        for(let j=0;j<arr.length;j++){
            if(arr[j].has(baseStr[i])){
                break;
            }
        }
    }
    console.log(arr, newres);
    return '';
};

const res = smallestEquivalentString("cgokcgerolkgksgbhgmaaealacnsshofjinidiigbjerdnkolc", "rjjlkbmnprkslilqmbnlasardrossiogrcboomrbcmgmglsrsj","bxbwjlbdazfejdsaacsjgrlxqhiddwaeguxhqoupicyzfeupcn");
console.log(res);
export {}