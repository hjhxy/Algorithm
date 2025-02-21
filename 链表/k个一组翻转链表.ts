
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let newhead = new ListNode();
    while(head){
        let count = 0;
        let start = head;
        let end = head;
        while(head){
            count++;
            if(count == k) {
                end = head;
                break;
            }
            head = head.next;
        }
        let front = start;
        let back = start;
        while(){
            back.next = front;
        }
        head = head!.next;
    }
};