function ReverseString(str){
    let len = str.length;
    let half = Math.floor(len / 2);
    for(let i = 0; i < half; i++){
        let temp = str[i];
        str[i] = str[len - 1 - i];
        str[len - 1 - i] = temp;
    }
}
const str = ["h", "e", "l", "l", "o"];
console.log(ReverseString(str));
