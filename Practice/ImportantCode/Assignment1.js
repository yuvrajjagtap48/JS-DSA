// function isEven(num){
//     if(num % 2 === 0){
//         return true;
//     }
//     return false;
// }

// function grade(score){
//     if(score >= 90){
//         return 'A';
//     }
//     else if(score >= 80){
//         return 'B';
//     }
//     else if(score >= 70){
//         return 'C';
//     }
//     else if(score >= 60){
//         return 'D';
//     }
//     else{
//         return 'F';
// }
// }


// function leapYear(year){
//     if(year % 4 === 0 && year % 100 !== 0 || year % 400 === 0)
//     {
//     return "Leap Year";
//     }
//     else{
//         return "Not a Leap Year";}
// }

// function largest(a, b, c){
//     if( a >= b && a >= c){
//         return "a is largest";
//     }
//     else if(b >= a && b >=c)
//     {    
//         return "b is largest";
//     }
//     else{
//         return "c is largest";
//     }
// }

// function oprator(a ,b , operator){
//     if(operator === '+'){
//         return a + b;
//     }
//     else if(operator === '-'){
//         return a - b;
//     }
//     else if(operator === '*'){
//         return a * b;
//     }
//     else if(operator === '/'){
//         return a / b;
//     }
//      else{
//         return "Invalid operator";
//     }
// }

// function sumNnumber(n){
//     let sum = 0;
//     for(let i = 1; i <= n; i++){
//         sum = sum + i;
//     }
//     return sum;
// }

// function sumOfDigits(num){
//     let sum = 0;
//     while(num > 0){
//         let digit = num % 10;
//         sum = sum + digit;
//         num = Math.floor(num / 10);
//     }
//     return sum;
// }


// function printFibo(n){
//     let fibo = [0,1];
//     for(let i = 0; i < n - 2 ; i++){
//         fibo[i + 2] = fibo[i] + fibo[i + 1];
//     }
//     return fibo;
// }
// function printFibo(n){
//     let a = 0, b = 1;
//     for(let i = 0; i < n; i++){
//         console.log(a);
//         let next = a + b;
//         a = b;
//         b = next;
//     }
// }


// function primeNumebr(num){
//     if(num <= 1) {
//         return "Not a prime number";
//     }
//     for(let i = 2; i <= Math.sqrt(num); i++){
//         if(num % i == 0){
//             return "Not Prime";
//         }
//     }
//     return "Prime number";
// }
// function primeNumber(n){
//     if(n <= 1) return false;
//     if(n === 2) return true;
//     if(n % 2 === 0) return false;
//     for(let i = 3; i <= Math.sqrt(n); i = i + 2){
//         if(n % i === 0) return false;
//      }
//      return true;
// }


// function multi(n){
//     for(let i = 1; i <= 10; i++){
//         console.log(n + " x " + i + " = " + n * i);
//     }
// }




let result = multi(5);
console.log(result); 