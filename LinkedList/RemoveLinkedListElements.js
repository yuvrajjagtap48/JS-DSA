function removeElements(head, val) {
    let sentinal = new ListNode();
    sentinal.next = head;
    let prev = sentinal;
    while (prev && prev.next) {
        if(prev.next.val === val){
            prev.next = prev.next.next;
        }
        else{
            prev = prev.next;
        }
    }
    return sentinal.next;
}

function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
}
let head = new ListNode(1, new ListNode(2, new ListNode(6, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6)))))));
let val = 6;
console.log(removeElements(head, val));

