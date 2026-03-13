// Two pointers approach
// function inter(headA, headB) {
//     let n = 0;
//     let pA = headA;
//     while(pA){
//         n++;
//         pA = pA.next;
//     }
//     let m = 0;
//     let pB = headB;
//     while(pB){
//         m++;
//         pB = pB.next;
//     }

//     let diff = Math.abs(n - m);
//     if(n > m){
//         temp = headA;
//         headA = headB;
//         headB = temp;
//     }
//     for(let i = 0; i < diff; i++){
//         headB = headB.next;
//     }

//     pA = headA;
//     pB = headB;
//     while(pA !== pB){
//         pA = pA.next;
//         pB = pB.next;
//     }
//     return pA;
// }

function inter(headA, headB) {
    let pA = headA;
    let pB = headB;
    while(pA !== pB){
        pA = pA === null ? headB : pA.next;
        pB = pB === null ? headA : pB.next;
    }
    return pA;
}

//Example


