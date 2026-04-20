// //using two pointers
// function intersection(headA, headB) {
//     let n = 0;
//     let pA = headA;
//     while (pA) {
//         n++;
//         pA = pA.next;
//     }
//     let m = 0;
//     let pB = headB;
//     while (pB) {
//         m++;
//         pB = pB.next;
//     }
//     // make sure headA is the shorter list
//     let diff = Math.abs(n - m);
//     if(n > m) {
//         let temp = headA;
//         headA = headB;
//         headB = temp;
//     }
//     //first list as small second list as large
//     for (let i = 0; i < diff; i++) {
//         headB = headB.next;
//     }
//     pA = headA;
//     pB = headB;
//     while (pA !== pB) {
//         pA = pA.next;
//         pB = pB.next;
//     }
//     return pA;
// }

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

//using set
// function intersection(headA, headB) {
//     let set = new Set();
//     while(headB) {
//         set.add(headB);
//         headB = headB.next;
//     }
//     while(headA) {
//         if (set.has(headA)) {
//             return headA;
//         }
//         headA = headA.next;
//     }
//     return null;
// }























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
