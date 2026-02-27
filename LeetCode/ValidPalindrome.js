// function ValidPalindrome(s) {
//     let filterString = "";
//     for(let i = 0; i < s.length; i++){
//         if(s[i].match(/[a-z0-9]/i)){                 // regex 
//             filterString = filterString + s[i];    
//         }
//     }
//     let reversed = filterString.split('').reverse().join('');
//     return filterString === reversed;
// }

// if(s[i].match(/[a-z0-9]/i)){                 // regex
// instead of regex we can also use charCodeAt to check 
// if(s[i].charCodeAt() >= "a".charCodeAt() && s[i].charCodeAt() <= "z".charCodeAt() 
// || s[i].charCodeAt() >= "0".charCodeAt() && s[i].charCodeAt() <= "9".charCodeAt()){
const s = "A man a plan a canal: Panama";
console.log(ValidPalindrome(s));



// function ValidPalindrome(s) {
//     let filter = "";
//     let reverse = "";
//     for(let i = 0; i < s.length; i++){
//         if(s[i].match(/[a-z0-9]/i)){                 // regex 
//             filter = filter + s[i]; 
//             reverse = s[i] + reverse;    // this way we can avoid creating a new array and reversing it. We can build the reverse string as we build the filter string.
//         }
//     }
//     return filter === reverse;
// }
// time  : O(n)
// space : O(n)



function ValidPalindrome(s) {
    s = s.toLowerCase();
    let i = 0;
    let j = s.length - 1;
    while(i < j){
        if( !s[i].match(/[a-z0-9]/i)){    
            ++i;
        }
        else if( !s[j].match(/[a-z0-9]/i)){
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