function permuteUnique(nums: number[]): number[][] {
    nums.sort((a,b)=>(a-b));
    const res: number[][] = [];
    for(let i = 0; i < nums.length; i++) {
        if(i>=1&&nums[i]===nums[i-1]){
            continue;
        }
        traval([i]);
    }
    function traval(indexs: number[]){
        if(indexs.length==nums.length){
            res.push([...indexs]);
            return ;
        }
        let set = new Set();
        for(let i = 0; i < nums.length; i++){
            if(indexs.indexOf(i)!==-1) continue;
            if(set.has(nums[i])) continue;
            traval([...indexs, i]);
            set.add(nums[i]);
        }
    }
    return res.map((el)=>{
        return el.map(i=>nums[i]);
    })
};


const res = permuteUnique([1,1,2]);
console.log(res);

export {}
