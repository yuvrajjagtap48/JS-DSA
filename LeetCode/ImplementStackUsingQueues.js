// Using two queues to implement a stack
// var MyStack = function() {
//     this.q1 = [];
//     this.q2 = [];
// };


// MyStack.prototype.push = function(x) {
//     this.q1.push(x);
// };


// MyStack.prototype.pop = function() {
//     let n = this.q1.length;
//     for (let i = 0; i < n - 1; i++) {
//         // let front = this.q1.shift();
//         // this.q2.push(front);
//         this.q2.push(this.q1.shift());
//     }
//     let ans = this.q1.shift();
//     // swap q1 and q2
//     let temp = this.q1;
//     this.q1 = this.q2;
//     this.q2 = temp;

//     return ans;
// };


// MyStack.prototype.top = function() {
//     let n = this.q1.length;
//     for (let i = 0; i < n - 1; i++) {
//         this.q2.push(this.q1.shift());
//     }
//     let front = this.q1[0];
//     this.q2.push(this.q1.shift());
//     // swap q1 and q2
//     let temp = this.q1;
//     this.q1 = this.q2;
//     this.q2 = temp;
//     return front;
// };

// MyStack.prototype.empty = function() {
//     return this.q1.length ===0;
// };




// Using one queue to implement a stack

var MyStack = function() {
    this.q = [];
};

MyStack.prototype.push = function(x) {
    this.q.push(x);
};

MyStack.prototype.pop = function(x) {
    let n = this.q.length;
    for (let i = 0; i < n - 1; i++) {
        this.q.push(this.q.shift());
    }
    return this.q.shift();
};
MyStack.prototype.top = function(x) {
    let n = this.q.length;
    for(let i = 0; i < n-1; i++){
        this.push(this.q.shift());
    }
    let front = this.q[0];
    this.q.push(this.q.shift());
    return front;

};
MyStack.prototype.empty = function(x) {
    return this.q.length === 0;
};


let stack = new MyStack();
stack.push(1);
stack.push(2);
console.log(stack.top()); 
console.log(stack.pop()); 
console.log(stack.empty()); 
