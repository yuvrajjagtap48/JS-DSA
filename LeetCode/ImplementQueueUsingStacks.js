function MyQueue(){
    this.s1 = [];
    this.s2 = [];
}

function push(x){
    this.s1.push(x);
}

function pop(){
if(this.s2.length === 0){
    while(this.s1.length){
        this.s2.push(this.s1.pop());
    }
}
return this.s2.pop();
}

function peek(){
if(this.s2.length === 0){
    while(this.s1.length){
        this.s2.push(this.s1.pop());
    }
}
return this.s2[this.s2.length - 1];
}

function empty(){
    return this.s1.length === 0 && this.s2.length === 0;
}


var queue = new MyQueue();
console.log(queue.empty());
console.log(queue.push(1));
console.log(queue.push(2));
console.log(queue.push(3));
console.log(queue.push(4));
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.push(5));
console.log(queue.push(6));
console.log(queue.peek());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.pop());
console.log(queue.empty());



