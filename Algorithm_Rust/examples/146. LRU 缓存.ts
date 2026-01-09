interface LinkNode {
  pre: LinkNode | null;
  next: LinkNode | null;
  key: number;
  val: number;
}
interface Link {
  head: LinkNode | null;
  back: LinkNode | null;
  capacity: number;
  len: number;
}

class LRUCache {
  private map: Map<number, LinkNode>;
  private link: Link;
  constructor(capacity: number) {
    this.map = new Map();
    this.link = { head: null, back: null, capacity, len: 0 };
  }

  get(key: number): number {
    const node = this.map.get(key);
    if (!node) return -1;
    this.moveToHead(node);
    return node.val;
  }

  put(key: number, value: number): void {
    let node = this.map.get(key);
    if (node) {
      node.val = value;
      this.moveToHead(node);
    } else {
      node = { pre: null, next: null, key, val: value };
      this.map.set(key, node);
      this.addToHead(node);
      this.link.len++;
      if (this.link.len > this.link.capacity) this.popBack();
    }
  }

  private addToHead(node: LinkNode) {
    node.pre = null;
    node.next = this.link.head;
    if (this.link.head) this.link.head.pre = node;
    this.link.head = node;
    if (!this.link.back) this.link.back = node;
  }

  private moveToHead(node: LinkNode) {
    if (node === this.link.head) return;
    if (node.pre) node.pre.next = node.next;
    if (node.next) node.next.pre = node.pre;
    if (this.link.back === node) this.link.back = node.pre;
    this.addToHead(node);
  }

  private popBack() {
    const tail = this.link.back;
    if (!tail) return;
    this.map.delete(tail.key);
    if (tail.pre) {
      tail.pre.next = null;
      this.link.back = tail.pre;
    } else {
      this.link.head = null;
      this.link.back = null;
    }
    this.link.len--;
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

export {};
