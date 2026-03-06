// n = 121;
// rev = 0;
// function palindrome(n) {
//   while (n > 0) {
//     rem = n % 10;
//     rev = rev * 10 + rem;
//     n = Math.floor(n / 10);
//   }
//   if( rev == n){
//     return "palindrome";
//   }
//   else{
//     return "not palindrome";
//   }
// }

function palindromeNumber(x) {
if (x < 0) return false;
    let xCopy = x;
    let rev = 0;
    while(x > 0){
        rem = x % 10;
        rev = rev * 10 + rem;
        x = Math.floor(x/10);
    }
    return xCopy === rev;
  }


let result = palindromeNumber(121);
console.log(result);
