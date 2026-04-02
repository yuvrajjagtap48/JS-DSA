function PowerOfThree(n){
    if(n === 1) return true;
    if(n % 3 !== 0 || n < 1) return false;
    return PowerOfThree(n / 3);
}

console.log(PowerOfThree(9));