// function swapPairs(head) {
//     if (!head || !head.next) return head;
//     let dummy = new ListNode(0);
//     dummy.next = head;
//     let p = dummy;
//     let c = head;
//     let n = head.next;
//     while (c && n) {
//         p.next = n;
//         c.next = n.next;
//         n.next = c;
//         p = c;
//         c = p.next;
//         n = c && c.next;
//     }
//     return dummy.next;
// }

function swapPairs(head) {
    if (!head || !head.next) return head;
    let dummy = new ListNode();
    dummy.next = head;
    let prev = dummy;
    let curr = head;
    while (curr && curr.next) {
        prev.next = curr.next;          
        curr.next = curr.next.next;         
        prev.next.next = curr;          
        prev = curr;                    
        curr = prev.next;              
    }
    return dummy.next;
}







// Example usage:
function ListNode(val) {
    this.val = val;
    this.next = null;
}
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
console.log(swapPairs(head));
