function intersection(headA, headB) {
    if (!headA || !headB) return null;  
    let pointerA = headA;
    let pointerB = headB;
    while (pointerA !== pointerB) {
        pointerA = pointerA ? pointerA.next : headB;
        pointerB = pointerB ? pointerB.next : headA;
    }
    return pointerA;
}



// Example usage:
function ListNode(value) {
    this.value = value;
    this.next = null;
}
let headA = new ListNode(1);
headA.next = new ListNode(2);
headA.next.next = new ListNode(3);
let headB = new ListNode(4);
headB.next = headA.next;
let intersectionNode = intersection(headA, headB);
if (intersectionNode) {
    console.log("Intersection at node with value:", intersectionNode.value); // Output: 2
} else {
    console.log("No intersection");
}
