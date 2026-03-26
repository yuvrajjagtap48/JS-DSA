function MinStack() {
    this.s = [];
}

MinStack.prototype.push = function(x) {
    if(this.s.length === 0){
        this.s.push([val, val]);
    }
    else{
        //Math.min(last, min, curr)
        let minVal = Math.min(val, this.s[this.s.length - 1][1]);
        this.s.push([val, minVal]);
    }
};

MinStack.prototype.pop = function() {
     this.s.pop();
};

MinStack.prototype.top = function() {
    return this.s[this.s.length - 1][0];
};

MinStack.prototype.getMin = function() {
    return this.s[this.s.length - 1][1];
};

let minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.push(-1);
minStack.push(-9);
minStack.push(-4);
minStack.push(-5);
minStack.push(1);
console.log(minStack.getMin());