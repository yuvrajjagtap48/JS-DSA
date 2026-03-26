// function remove(s){
//     let stack = [];
//     let ans = '';
//     for(let i = 0; i < s.length; i++){
//         if(s[i] === '('){
//             if(stack.length > 0){
//                 ans = ans + s[i];
//             }
//             stack.push(s[i]);
//         }
//         else {
//             stack.pop();
//             if(stack.length > 0){
//                 ans = ans + s[i];
//             }
//         }
//     }   
//     return ans;
// }

let s = "()()()()";
console.log(remove(s));

// function remove(s){
//     let stack = [];
//     let ans = '';
//     for(let i = 0; i < s.length; i++){
//         if(s[i] === '('){
//             stack.push(s[i]);
//             ans += ((stack.length > 1) ? s[i] : '');
//         }
//         else {
//             ans += ((stack.length > 1) ? s[i] : '');
//             stack.pop();
//         }
//     }
//     return ans;
// }


// with using stack
function remove(s){
    let level = 0;
    let ans = '';
    for(let i = 0; i < s.length; i++){
        if(s[i] === '('){
            level++;
            ans += ((level > 1) ? s[i] : '');
        }
        else {
            ans += ((level > 1) ? s[i] : '');
            level--;
        }
    }
    return ans;
}