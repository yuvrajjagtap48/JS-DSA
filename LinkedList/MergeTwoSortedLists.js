function mergeLists(l1, l2) {
    let dummy = new ListNode();
    let current = dummy;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        }
        else {            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }
    current.next = l1 || l2;
    return dummy.next;
}

// Example usage:
function ListNode(val) {
    this.val = val;
    this.next = null;
}
const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
const l2 = new ListNode(1);
l2.next = new ListNode(3);
l2.next.next = new ListNode(4);
console.log(mergeLists(l1, l2));