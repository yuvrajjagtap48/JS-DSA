// function prime(num){
//     if(num < 2) return false; 
//     for(let i = 2; i * i <= num; i++){       
//         if(num % i == 0){
//             return false;
//         }
//     }
//     return true;
// }


// function factorial(num){
//     let fact = 1;
//     for(let i = 1; i <= num; i++){
//         fact = fact * i;
//     }
//     return fact;
// }
// function factorial(num){
//     if(num == 0 || num == 1) return 1;
//     return num * factorial(num - 1);
// }


// function fibo(num){
//     let a =0; b= 1;
//     for(let i = 2; i <= num; i++){
//         let temp = a+ b;
//         a= b;
//         b = temp;
//     }
//     return num === 0 ? a : b;
// }


// function countDigits(num){
//     let count = 0;
//     while(num > 0){
//         num = Math.floor(num / 10);
//         ++count; 
//     }
//     return count;
// }

// function reverseDigits(num){
//     let rev = 0;
//     while(num > 0){
//         let digit = num % 10;
//         rev = rev * 10 + digit;
//         num = Math.floor(num / 10);
//     }
//     return rev;
// }


//Euclidean Algorithm  gcd(greatest common divisor)
// function gcd(a,b){
//     while(b != 0){
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }
// function lcm(a,b){
//     return (a * b) / gcd(a,b);
// }

// function pow(base, exp){
//     let result = 1;
//     for(let i = 0; i < exp; i++){
//         result = result * base;
//     }
//     return result;
// }


// function palindrome(num){
//     let original = num;
//     let rev = 0;
//     while(num > 0){
//         let digit = num % 10;
//         rev = rev * 10 + digit;
//         num = Math.floor(num / 10);
//     }
//     return rev === original;
// }

// function trailingZeroes(num){
//     let count = 0;
//     while(num > 0){
//         num = Math.floor(num / 5); // 
//         count = count + num;
//     }
//     return count;
// }


function sieveOfEratosthenes(n){    // prime range 1 to n
    let isPrime = new Array(n+1).fill(true);   // initially we assume all number are prime
    isPrime[0] = false;
    isPrime[1] = false;
    for(let i = 2; i * i <= n; i++){
        if(isPrime[i]){
            for(let j = i * i; j <= n; j = j + i){
                isPrime[j] = false;
            }
        }
    }
    let res = [];
    for(let i = 2; i <= n; i++){
        if(isPrime[i]){
            res.push(i);
        }
    }
    return res;
}

let result = sieveOfEratosthenes(10);
console.log(result);


// function fastPower(x, n){
//     let result = 1;
//     while(n > 0){
//         if(n % 2 === 1){
//             result = result * x;
//         } 
//         x = x * x;
//         n = Math.floor(n / 2);
//     }
//     return result;
// }
