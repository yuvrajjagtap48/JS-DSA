function node(value) {
    this.value = value;
    this.next = null;
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let temp = current.next;
        current.next = prev;
        prev = current;
        current = temp; 
    }
    return prev;
}

// Example usage:
let head = new node(1);
head.next = new node(2);
head.next.next = new node(3);
head.next.next.next = new node(4);
console.log("Original Linked List:");
let current = head;
while (current !== null) {
    console.log(current.value);
    current = current.next;
}
head = reverseLinkedList(head);
console.log("Reversed Linked List:");
current = head;
while (current !== null) {
    console.log(current.value);
    current = current.next;
}
