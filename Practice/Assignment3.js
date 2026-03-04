// function FindLength(str){
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         count++;
//     }
//     return count;
// }


// function FrequencyOfCharacters(str){
//     let frequency = [];
//     for(let i = 0; i < str.length; i++){
//         if(frequency[str[i]]){
//             frequency[str[i]]++;
//         }
//         else{
//             frequency[str[i]] = 1;
//         }
//     }
//     return frequency;
// }


// function Palindrome(str){
//     let left = 0;
//     let right = str.length - 1;
//     while(left < right){
//         if(str[left] !== str[right]){
//             return false;
//         }
//         left++;
//         right--;
//     }  
//     return true;
// }
// function Palindrome(str){
//     let reversed = "";
//     for(let i = str.length - 1; i >= 0; i--){
//         reversed = reversed + str[i];
//     }
//     return reversed === str;
// }


// function concatenateStrings(str1, str2){
//     let result = "";
//     for(let i = 0; i < str1.length; i++){
//         result = result + str1[i];
//     }
//     for(let i = 0; i < str2.length; i++){
//         result = result + str2[i];
//     }
//     return result;
// }
// function concatenateStrings(str1, str2){
//     return str1 + str2;
// }   


// function ReverseString(str){
//     let reversed = "";
//     for(let i = str.length - 1; i >= 0; i--){
//         reversed = reversed + str[i];
//     }
//     return reversed;
// }


// function SubString(str, start, end){
//     let result = "";
//     for(let i = start; i < end; i++){
//         result = result + str[i];
//     }
//     return result;
// }
// function SubString(str, start, end){
//     return str.slice(start, end);
// }


// function CountVowelsConsonants(str){
//     let vowels = 0;
//     let consonants = 0;
//     let vowelsList = "aeiouAEIOU";
//     for(let i = 0; i < str.length; i++){
//         if(vowelsList.includes(str[i])){
//             vowels++;
//         }
//         else if(str[i].match(/[a-zA-Z]/)){     // Regex
//             consonants++;
//         }
//     }
//     return {vowels, consonants};
// }


function Anagram(str){
    let cleanedStr = str.replace(/[^a-zA-Z]/g, "").toLowerCase();
    let charCount = {};
    for(let i = 0; i < cleanedStr.length; i++){
        if(charCount[cleanedStr[i]]){
            charCount[cleanedStr[i]]++;
        }
        else{
            charCount[cleanedStr[i]] = 1;
        }
    }
    for(let char in charCount){
        if(charCount[char] % 2 !== 0){
            return false;
        }
    }
    return true;
}


let result = Anagram("Hello, world!");
console.log(result);