n = 121;
rev = 0;

function palindrome(n) {
  while (n > 0) {
    rem = n % 10;
    rev = rev * 10 + rem;
    n = Math.floor(n / 10);
  }
  if( rev == n){
    return "palindrome";
  }
  else{
    return "not palindrome";
  }
}

let result = palindrome(n);
console.log(result);
