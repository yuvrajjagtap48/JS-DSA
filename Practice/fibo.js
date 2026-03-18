function fibo(n){
    if(n <= 1){
        return n;
    }   
    return fibo(n - 1) + fibo(n - 2);

}

// function fibo(n){
//     let a = 0;
//     let b = 1;
//     for(let i = 0; i < n; i++){
//         let temp = a;
//         a = b;
//         b = temp + b;
//     }
//     return a;
// }

let n = 10;
console.log(fibo(n));