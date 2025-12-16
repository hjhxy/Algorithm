function maxEvents(events: number[][]): number {
    // 按开始时间排序
    events.sort((a, b) => a[0] - b[0]);
  
    const heap = new MinHeap();
    let day = 1;
    let res = 0;
    let i = 0;
    const n = events.length;
    const maxDay = Math.max(...events.map(e => e[1]));
  
    while (day <= maxDay) {
      // 将所有今天开始的活动加入堆中（堆存结束时间）
      while (i < n && events[i][0] === day) {
        heap.insert(events[i][1]);
        i++;
      }
  
      // 移除已经过期的活动（结束时间小于当前天）
      while (heap.peek() !== undefined && heap.peek()! < day) {
        heap.pop();
      }
  
      // 贪心选择最早结束的活动
      if (heap.peek() !== undefined) {
        heap.pop();
        res++;
      }
  
      day++;
    }
  
    return res;
  }


class MinHeap {
    private data: number[] = [];

    constructor(){}
  
    // 获取堆顶元素
    peek(): number | undefined {
      return this.data[0];
    }
  
    // 插入元素
    insert(val: number): void {
      this.data.push(val);
      this.bubbleUp(this.data.length - 1);
    }
  
    // 删除并返回堆顶元素
    pop(): number | undefined {
      if (this.data.length === 0) return undefined;
      const min = this.data[0];
      const last = this.data.pop()!;
      if (this.data.length > 0) {
        this.data[0] = last;
        this.bubbleDown(0);
      }
      return min;
    }
  
    // 上浮操作（插入后）
    private bubbleUp(index: number): void {
      while (index > 0) {
        const parentIdx = Math.floor((index - 1) / 2);
        if (this.data[parentIdx] <= this.data[index]) break;
        [this.data[parentIdx], this.data[index]] = [this.data[index], this.data[parentIdx]];
        index = parentIdx;
      }
    }
  
    // 下沉操作（删除堆顶后）
    private bubbleDown(index: number): void {
      const n = this.data.length;
      while (true) {
        let smallest = index;
        const left = 2 * index + 1;
        const right = 2 * index + 2;
  
        if (left < n && this.data[left] < this.data[smallest]) {
          smallest = left;
        }
        if (right < n && this.data[right] < this.data[smallest]) {
          smallest = right;
        }
  
        if (smallest === index) break;
  
        [this.data[index], this.data[smallest]] = [this.data[smallest], this.data[index]];
        index = smallest;
      }
    }
  
    // 工具方法：打印当前堆
    print(): void {
      console.log(this.data);
    }
}
  

const res = maxEvents([[1,2],[1,2],[3,3],[1,5],[1,5]]);
console.log(res);
export {}
