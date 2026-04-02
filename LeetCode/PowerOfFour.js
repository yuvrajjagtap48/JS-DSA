function PowerOfFour(n){
    if(n === 1) return true;
    if(n % 4 !== 0 ) return false;
    return PowerOfFour(n / 4);
}
console.log(PowerOfFour(16));