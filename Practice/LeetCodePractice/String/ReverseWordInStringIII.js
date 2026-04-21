function reverseWords(s) {
    let arr = s.split("");
    let start = 0;
    for (let i = 0; i <= arr.length; i++) {
        if (i === arr.length || arr[i] === " ") {
            let l = start;
            let r = i - 1;
            while (l < r) {
                let temp = arr[l];
                arr[l] = arr[r];
                arr[r] = temp;
                l++;
                r--;
            }
            start = i + 1;
        }
    }
    return arr.join("");
}

console.log(reverseWords("Let's take LeetCode contest"));
