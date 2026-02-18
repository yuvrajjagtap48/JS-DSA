// function ReverseString(s){
//     let left = 0;
//     let right = s.length - 1;
//     for(let i = 0; i < s.length / 2; i++){
//         // swap the characters at left and right pointers
//         let temp = s[left];
//         s[left] = s[right];
//         s[right] = temp;
//         left++;
//         right--;
//     }
// }

function ReverseString(s){
    let len = s.length;
    let half = Math.floor(len/2);

    for(let i = 0; i < half; i++){
        let temp = s[i];
        s[i] = s[len-1-i];
        s[len-1-i] = temp;
    }
}
const s = ["h", "e", "l", "l", "o"];
ReverseString(s);
console.log(s);