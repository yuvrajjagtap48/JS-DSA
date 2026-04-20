//     // using two pass
// function removeNthFromEnd(head, n) {
//     let sentinal = new ListNode();
//     sentinal.next = head;
//     let length = 0;
//     while (head) {
//         head = head.next;
//         length++;
//     }
//     let prevPos = length - n;
//     let prev = sentinal;
//     for(let i = 0; i < prevPos; i++){
//         prev = prev.next;
//     }
//     prev.next = prev.next.next;
//     return sentinal.next;
// }

//using one pass
function removeNthFromEnd(head, n) {
    //add sentinal node at start
    let sentinal = new ListNode();
    sentinal.next = head;
    //move my first pointer ahead by n 
    let first = sentinal;
    for(let i = 0; i < n; i++){
        first = first.next;
    }
    //move both pointer until first pointer reaches last node 
    let second = sentinal;
    while(first && first.next){
        first = first.next;
        second = second.next;
    }
    //just delete second.next node
    second.next = second.next.next;
    return sentinal.next;
}


function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
let head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
let n = 2;
console.log(removeNthFromEnd(head, n));