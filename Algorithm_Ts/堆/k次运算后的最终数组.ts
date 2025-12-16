// 题目的意思已经非常明确了，每次操作可能会造成数组大小改变，但是总是希望找到最小值, 可以实现 k*logn。
// 通过堆实现优先队列，每次调整的时间复杂度是logn，但是不通过优先队列就需要每次找最小值n, 最终为 k*n
function getFinalState(nums: number[], k: number, multiplier: number): number[] {
    let count = 0;
    let MOD = Math.pow(10, 9) + 7;
    const stack = new MiniStack();
    for (let i = 0; i < nums.length; i++){
        stack.push({
            value: nums[i],
            index: i,
        });
    }
    const newarr = stack.getValue();
    while (count < k) {
        newarr[0].value = (newarr[0].value * multiplier) % MOD;
        nums[newarr[0].index] = newarr[0].value;
        stack.heapifyUp(); // 调整
        count++;
    }
    console.log(stack.getValue());
    return nums;
};

interface IStack {
    value: number;
    index: number;
}
class MiniStack {
    private stack: IStack[];
    constructor() {
        this.stack  = [];
    }
    push(data: IStack) {
        this.stack.push(data);
        this.heapifyUp();
    }
    heapifyUp() {
        let index = this.stack.length - 1;

        while (index>0 && this.stack[Math.floor((index - 1) / 2)].value > this.stack[index].value) {
            let parentIndex = Math.floor((index - 1) / 2);
            let mid = this.stack[parentIndex];
            this.stack[parentIndex] = this.stack[index];
            this.stack[index] = mid;
            index = parentIndex;
        }
    }
    getValue(){
        return this.stack;
    }
}

function getFinalState2(nums: number[], k: number, multiplier: number): number[] {
    let count=0;
    let MOD = Math.pow(10, 9)+7;
    while(count<k){
        let minIndex = 0;
        for(let i=1;i<nums.length;i++){
            if(nums[i]<nums[minIndex]){
                minIndex = i;
            }
        }
        nums[minIndex] = (nums[minIndex]*multiplier)%MOD;
        count++;
    }
    return nums;
};


const res = getFinalState2([66307295, 441787703, 589039035, 322281864], 900900704, 641725);
console.log(res);

export { };