
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}


/* 空间O(1)*/
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
    let node = head;
    let count = 0;
    while (node){
        node = node.next;
        count++;
    }
    let forCount = Math.floor(count / k);
    let rest = count % k;
    let newnode = head;
    while(forCount) {
        let c = 0;
        let n;
        while(c<k && newnode) {
            n=newnode.next;
            newnode.next = newnode;
            newnode = n.next;
        }
    }
}


/* 空间O(n)*/
// function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
//     let newhead = new ListNode();
//     let concat = newhead;
//     while(head) {
//         let arr:ListNode[] = [];
//         while(arr.length < k && head) {
//             arr.push(head);
//             head = head.next;
//         }
//         if(arr.length == k) {
//             for(let i = arr.length-1; i >=0; i--) {
//                 concat.next = arr[i];
//                 concat = concat.next;
//             }
//         } else {
//             for(let i = 0; i<arr.length; i++) {
//                 concat.next = arr[i];
//                 concat = concat.next;
//             }
//         }
//     }

//     return newhead.next;
// };