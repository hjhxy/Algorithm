function smallestNumber(n: number, t: number): number {
    while(!foo(n)){
        n+=1;
    }
    function foo(num: number): boolean {
        let res = 1;
        while(num){
            console.log('=', res, num);
            res = res * (num%10);
            num = Math.floor(num/10);
            console.log('-', res, num);
        }
        console.log(res, t);
        return res%t==0;
    }
    return n;
};



const res = smallestNumber(21, 7);
console.log(res);

export {}