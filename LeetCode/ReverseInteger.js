function ReverseInterger(n) {
  let nCopy = n;
  n = Math.abs(n);
  let rev = 0;
  while (n > 0) {
    last = n % 10;
    rev = rev * 10 + last;
    n = Math.floor(n / 10);
  }
  return nCopy > 0 ? rev : -rev;
}

let result = ReverseInterger(-123);
console.log(result);

