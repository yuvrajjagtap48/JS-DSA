function countDigit(n) {
  if (n == 0) return 1; // Special case for 0, as it has 1 digit

  n = Math.abs(n); // Handle negative numbers
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}
let n = 2599345;
let result = countDigit(n);
console.log(result);
