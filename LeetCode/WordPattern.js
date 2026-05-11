function wordPattern(pattern, s) {
    const words = s.split(' ');
    if (pattern.length !== words.length) {
        return false;
    }
    const charToWord = {};
    const wordToChar = {};
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];
        if (charToWord[char] && charToWord[char] !== word || wordToChar[word] && wordToChar[word] !== char) {
            return false;
        }
        charToWord[char] = word;
        wordToChar[word] = char;
    }
    return true;
}

let result = wordPattern("abba", "dog cat cat dog");
console.log(result);