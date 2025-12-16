function minCut(s: string): number {
    const dp: number[] = Array(s.length).fill(0);
    for(let i=0;i<s.length;i++) {
        if(isHuiwen(0, i)){
            dp[i] = 1;
            continue;
        }
        let min = Infinity;
        for(let j=0;j<i;j++) {
            if(dp[j]>0&&isHuiwen(j+1, i)){
                min = Math.min(min, dp[j]+1);
            }
        }
        dp[i] = min;
    }
    console.log(dp);

    return dp[dp.length - 1] - 1;
    function isHuiwen(left:number, right:number): boolean {
        while (left < right) {
            if (s[left]!==s[right]) {
                return false;
            }
            left++;
            right--;
        }
        return true;
    }
};


const res = minCut("aabbcc");
console.log(res);

export {};