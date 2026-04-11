// function ValidPalindrome(s) {
//     let filter = "";
//     let reverse = "";
//     for(let i = 0; i < s.length; i++){
//         if(s[i].match(/[a-z0-9]/i)){
//             filter = filter + s[i];
//             reverse = s[i] + reverse;
//         }
//     }
//     return filter === reverse;
// }

// function ValidPalindrome(s) {
//     s = s.toLowerCase();
//     let i = 0;
//     let j = s.length - 1;
//     while(i < j){
//         if(!s[i].match(/[a-z0-9]/i)){
//             ++i;
//         }
//         else if(!s[j].match(/[a-z0-9]/i)){
//             --j
//         }
//         else if(s[i] === s[j]){
//             ++i;
//             --j;
//         }
//         else{
//             return false;
//         }
//     }
//     return true;
// }

function ValidPalindrome(s){
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;

    function isAlpha(c){
        return  (c >= 'a' && c <= 'z') || (c >= '0' && c <= '9');
    }
    while(i < j){
        if(!isAlpha(s[i])){
            ++i;
        }
        else if(!isAlpha[j]){
            --j;
        }
        else if(s[i] === s[j]){
            ++i;
            --j;
        }
        else{
            return false;
        }
    }
    return true;
}
const s = "A man a plan a canal: Panama";
console.log(ValidPalindrome(s));


function valid(num){
    
}