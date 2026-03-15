function LinkedList() {
    this.head = null;
    this.length = 0;
}

LinkedList.prototype.add = function(data) {
    let node = new Node(data);
    if(this.head === null) {
        this.head = node;
    } else {
        let current = this.head;    
        while(current.next) {
            current = current.next;
        }
        current.next = node;
    }   
    this.length++;
}   
