function InttoRoman(num){
    const v = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const s = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let res = "";
    for(let i = 0; i < v.length; i++){
        while(num >= v[i]){
            res = res + s[i];
            num = num - v[i];
        }
    }
    return res;
}

const num = 14;
console.log(InttoRoman(num));

function InttoRoman(num){
    const v = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const s = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
    let res = "";
    for(let i = 0; i < v.length; i++){
        while(num >= v[i]){
            res = res + s[i];
            num = num - v[i];
        }
    }   
    return res;
}