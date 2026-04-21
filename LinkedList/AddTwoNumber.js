function addTwoNumbers(l1, l2) {
    let ans = new ListNode();
    let ansHead = ans;
    let carry = 0;
    while (l1 || l2 || carry) {
        let sum = (!l1 ? 0 : l1.val) + (!l2 ? 0 : l2.val) + carry;
        carry = Math.floor(sum / 10);
        let digit = sum % 10;
        
        let newNode = new ListNode(digit);
        ans.next = newNode;
        ans = ans.next;
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    return ansHead.next;
}

// function addTwoNumbers(l1, l2) {
//     let dummy = new ListNode()
//     let curr = dummy
//     let total = 0
//     let carry = 0
//     while(l1||l2||carry){
//         total = carry
//         if(l1){
//             total+= l1.val
//             l1 = l1.next
//         }
//         if(l2){
//             total+= l2.val
//             l2 = l2.next
//         }
//         carry = Math.floor(total/10)
//         curr.next = new ListNode(total%10)
//         curr= curr.next
//     }
//     return dummy.next
// };


// Example usage:
function ListNode(val) {
    this.val = val;
    this.next = null;
}
const l1 = new ListNode(7);
const l2 = new ListNode(4);
l2.next = new ListNode(1);
console.log(addTwoNumbers(l1, l2));

