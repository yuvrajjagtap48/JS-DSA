// function squareRoot(x) {
//     // return Math.trunc(Math.pow(x, 0.5));
//     return Math.trunc(x**0.5);
// }

// function squareRoot(x) {
//     for(let i = 0; i <= x; i++) {
//         if(i * i > x) {      //it check i * i values is greater than X 
//             return i - 1;
//         }
//     }   
// }

console.log(squareRoot(49)); 

function squareRoot(x) {
    if(x < 2) return x; 
    let left = 2;
    let right = Math.trunc(x / 2);
    while(left <= right){
        let mid = Math.floor(left + (right - left) / 2);
        if(x === mid**2){
            return mid;
        }
        else if(x < mid**2){
            right = mid - 1;
        }
        else{
            left = mid + 1;
        }
    }
    return right;
}