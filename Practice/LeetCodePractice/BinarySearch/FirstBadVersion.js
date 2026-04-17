// function firstBadVersion(n){
//     let l = 0;
//     let r = n;
//     while(l < r){
//         let mid = Math.floor(l + (r - l) / 2);
//         if(!isBadVersion(mid)){
//             l = mid + 1;
//         }
//         else{
//             r = mid;
//         }
//     }
//     return r;
// }


let n = 7;
console.log(firstBadVersion(n));
function isBadVersion(n) {
    return n >= 4;
} 
function firstBadVersion(n){
    let l = 1;
    let r = n;
    while(l < r){
        let mid = Math.floor(l + (r-l)/ 2);
        if(!isBadVersion(mid)){
            l = mid + 1;
        }
        else{
            r = mid;
        }
    }
    return r;
}