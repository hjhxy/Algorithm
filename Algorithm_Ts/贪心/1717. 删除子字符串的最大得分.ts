function maximumGain(s: string, x: number, y: number): number {
    let res = 0;
    let stack: string[] = [];
    let i=0;
    stack.push(s[i++]);
    let target = x > y ? {
        arr: ['b', 'a'],
        max: x,
        min: y,
    }:{
        arr: ['a', 'b'],
        max: y,
        min: x,
    };
    
    while(i<s.length) {
        if(stack.length && s[i] == target.arr[0] && stack[stack.length-1] == target.arr[1]){
            stack.pop();
            res += target.max;
            console.log(i);
        } else {
            stack.push(s[i]);
        }
        i++;
    }
    console.log(stack, res);
    if(stack.length){
        let i=0;
        while(i<stack.length){
            if(stack.length && s[i] == target.arr[1] && stack[stack.length-1] == target.arr[0]){
                stack.pop();
                res += target.min;
                console.log(i);
            } else {
                stack.push(s[i]);
            }
            i++;
        }
    }

    return res;
};

const res = maximumGain("aabbaaxybbaabb", 5, 4);
console.log(res);

export {}