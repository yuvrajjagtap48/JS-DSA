// Join linked List 

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function inter(headA, headB) {
    let pA = headA;
    let pB = headB;
    while(pA !== pB){
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
}

let headA = new Node(1);
headA.next = new Node(2);
headA.next.next = new Node(3);
headA.next.next.next = new Node(4);
headA.next.next.next.next = new Node(5);    