class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class Solution {
  private arr: number[];
  constructor(head: ListNode | null) {
    this.arr = [];
    while (head) {
      this.arr.push(head.val);
      head = head.next;
    }
  }

  getRandom(): number {
    const n = Math.floor(Math.random() * this.arr.length);
    return this.arr[n];
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
