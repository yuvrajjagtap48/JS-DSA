function palindrome(head) {
    //finding middle of the linked list
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    //reverse the second half of the linked list
    let prev = null;
    let curr = slow;
}






function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
let head = new ListNode(1, new ListNode(3, new ListNode(2, new ListNode(1))));
console.log(palindrome(head));

