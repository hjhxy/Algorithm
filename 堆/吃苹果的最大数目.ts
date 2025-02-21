function eatenApples(apples: number[], days: number[]): number {
    const heap = new MiniHeap(apples);

    console.log(heap.getValue());

    return 1;
};


class MiniHeap{
    private heap: number[] = [];
    constructor(arr: number[]) {
        for (let i = 0; i < arr.length; i++) {
            this.push(arr[i]);
        }
    }

    push(value: number): void {
        this.heap.push(value);
        this.heapify();
    }

    heapify(){
        let endi = this.heap.length-1;
        let parenti = Math.floor((endi-1)/2);
        // console.log(endi, parenti, this.heap[endi], this.heap[parenti]);
        while(parenti>0 && this.heap[endi]<this.heap[parenti]){
            let mid = this.heap[endi];
            this.heap[endi] = this.heap[parenti];
            this.heap[parenti] = mid;
            endi = parenti;
            parenti = Math.floor((endi-1)/2);
        }
    }

    getValue(){
        return [...this.heap];
    }
}

const res = eatenApples([1,4,6,5,2,2], [3,2,1,4,2]);
console.log(res);
