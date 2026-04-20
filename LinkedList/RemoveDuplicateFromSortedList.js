function removeDuplicates(head) {
    let curr = head;
    while (curr !== null && curr.next !== null) {    //while(curr && curr.next) also works
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next;
        }
        else {
            curr = curr.next;
        }
    }
    return head;
}




function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
let head = new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(3)))));
console.log(removeDuplicates(head));
