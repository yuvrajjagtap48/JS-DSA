// approach 1 : convert linked list to array and return middle element
// function middleNode(arr) {
//     let mid = Math.floor(arr.length / 2);
//     return arr[mid];
// }

// approach 2 : use two pointers, fast and slow 
function middleNode(head) {
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
// function middleNode(head) {
//     let slow = fast = head;
//     while (fast && fast.next) {
//         slow = slow.next;
//         fast = fast.next.next;
//     }
//     return slow;
// }




function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
let head = new ListNode(1,
    new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
console.log(middleNode(head)); 