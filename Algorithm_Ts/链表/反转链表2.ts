
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
    let newhead = new ListNode();
    newhead.next = head;
    let node: ListNode|null = newhead;
    let count = 0;
    let preStart:ListNode|null = null;
    let start:ListNode|null = null;
    let end:ListNode|null = null;
    let endNext:ListNode|null = null;
    while(node.next){
        count++;
        if(count==left){
            preStart = node;
            start = node.next;
        }
        if(count==right){
            end = node.next;
            break;
        }
        node = node.next;
    }
    endNext = end!.next;
    
    return newhead;
};