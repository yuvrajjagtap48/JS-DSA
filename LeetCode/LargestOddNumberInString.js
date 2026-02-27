// function LargestOdd(num){
//     for(let i=num.length-1; i>=0; i--){
//         if(num[i] % 2 === 1){
//             return num.substring(0, i+1);
//         }
//     }
//     return "";
// }

num = "5234567345444";
console.log(LargestOdd(num));


function LargestOdd(num) {
    let n = num.length - 1;
    while(n >= 0){
        if(num[n] % 2 === 1){
            return num.substring(0, n+1);
        }
        --n;
    }
    return "";
}