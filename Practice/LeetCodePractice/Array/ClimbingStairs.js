function climbing(n){
    if (n <= 2) return n;

    let a = 1;
    let b = 2;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
        console.log(`i: ${i}, a: ${a}, b: ${b}`); // Debugging statement to trace the values
    }
    return b;
}

let result = climbing(5);
console.log(result);