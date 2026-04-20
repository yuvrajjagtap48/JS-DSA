function palindrome(head) {
    //finding middle of the linked list
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    //reverse the second half of the linked list
    let prev = null;
    let curr = slow;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    //checking for palindrome
    let firstList = head;
    let secondList = prev;
    while (secondList) {
        if (firstList.val !== secondList.val) {
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next;
    }
    return true;
}






function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
let head = new ListNode(1, new ListNode(3, new ListNode(3, new ListNode(1))));
console.log(palindrome(head));

