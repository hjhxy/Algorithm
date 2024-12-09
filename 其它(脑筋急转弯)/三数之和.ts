function threeSum(nums: number[]): number[][] {
    const newarr = nums.map((el, index) => {
        return {
            el,
            index
        }
    })
    newarr.sort((a, b) => a.el - b.el);
    const res: number[][] = [];
    for (let i = 0; i < newarr.length; i++) {
        res.push(...doublePointer(i, newarr));
    }
    function doublePointer(index: number, arr: Array<{ el: number, index: number, [key: string]: any }>) {
        let res: number[][] = [];
        let start = index + 1; // 剪枝，减少重复计算。
        let end = arr.length - 1;
        const n1 = arr[index];
        while (start < end) {
            if (start == index) {
                start++;
                continue;
            }
            else if (end == index) {
                end--;
                continue;
            }
            if (arr[start].el + arr[end].el < -n1.el) {
                start++;
            } else if (arr[start].el + arr[end].el > -n1.el) {
                end--;
            } else {
                res.push([n1.el, arr[start].el, arr[end].el].sort());
                break;
            }
        }
        return res;
    }
    return res;
};


const nums = [0, 0, 0, 0, 0, 0];
const res = threeSum(nums);
console.log(res);

export { }