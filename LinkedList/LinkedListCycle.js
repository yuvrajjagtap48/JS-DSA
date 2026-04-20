// function cycle(head) {
//     let slow = head;
//     let fast = head;
//     while (fast !== null && fast.next !== null) {
//         slow = slow.next;
//         fast = fast.next.next;
//         if (slow === fast) {
//             return true;
//         }
//     }
//     return false;
// }

// function cycle(head) {
//     if(head === null) return false;
//     let slow = head;
//     let fast = head.next;
//     while(slow !== fast){
//         if(fast === null || fast.next === null){
//             return false;
//         }
//         slow = slow.next; 
//         fast = fast.next.next;
//     }
//     return true;
// }

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);

head.next.next.next.next.next = head.next;
console.log(cycle(head));




//using hash
function cycle(head) {
    let set = new Set();
    let curr = head;
    while (curr !== null) {
        if (set.has(curr)) {
            return true;
        }
        set.add(curr);
        curr = curr.next;
    }
    return false;
}