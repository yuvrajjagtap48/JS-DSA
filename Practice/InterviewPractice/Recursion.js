// function print(n){
//     if (n === 0) return;
//     print(n - 1);
//     console.log(n);
// }
 
// function fact(n){
//     if(n === 0) return 1;
//     return n * fact(n - 1);
// }

// function sumOfDigits(n){
//     if(n === 0) return 0;
//     return (n % 10) + sumOfDigits(Math.floor(n / 10));
// }

// function fibo(n){
//     if(n === 0) return 0;
//     if(n === 1) return 1;
//     return fibo(n - 1) + fibo(n - 2);
// }

// function reverseArray(arr, l = 0, r = arr.length - 1) {
//     if (l >= r) return arr;
//     // swap
//     let temp = arr[l];
//     arr[l] = arr[r];
//     arr[r] = temp;
//     return reverseArray(arr, l + 1, r - 1);
// }


function isPalindrome(str, l = 0, r = str.length - 1) {
    if (l >= r){
        return true;
    }
    if (str[l] !== str[r]){
        return false;
    }
    return isPalindrome(str, l + 1, r - 1);
}

console.log(isPalindrome("racecar"));