function rotateList(head, k) {
    if(!head  || !head.next ) return head;

    //calculate length 
    let length = 0;
    let curr = head;
    while(curr) {
        curr = curr.next;
        length++;
    }
    // to avoid unnecessary rotations
    k = k % length;

    let s = head;
    let f = head;
    //move the fast pointer k steps ahead
    for(let i = 0; i < k; i++) {
        f = f.next;
    }
    //reach the end of list
    while(f.next) {
        s = s.next;
        f = f.next;
    }
    f.next = head;
    let newHead = s.next;
    s.next = null;
    return newHead;
}





// function rotateList(head, k) {
//     if (!head || k === 0) return head;
//     // Compute the length of the list and get the tail node
//     let tail = head;
//     let length = 1;
//     while (tail.next) {
//         tail = tail.next;
//         length++;
//     }
//     // Connect the tail to the head to make it circular
//     tail.next = head;
//     // Find the new tail: (length - k % length - 1)th node
//     // and the new head: (length - k % length)th node
//     let newTail = head;
//     for (let i = 0; i < length - k % length - 1; i++) {
//         newTail = newTail.next;
//     }
//     let newHead = newTail.next;
//     // Break the circle
//     newTail.next = null;
//     return newHead;
// }

// Example usage:
const head = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: null
                }
            }
        }
    }
};
const k = 2;
console.log(rotateList(head, k));