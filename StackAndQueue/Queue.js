let q = [];
q.push(1);  // enqueue
q.push(2);
q.push(3);
console.log(q);
q.shift();  // dequeue
console.log(q);

// NEVER DO THIS => q.pop(); 

let front = q[0];
console.log(front);

