// function square(x){
//     let result = x * x;
//     return result;
// }

// let value = square(5);
// console.log(value); 


function num() {
    let n = [1, 2, 3, 4, 5];

    for (let i = 0; i < n.length; i++) {
        if (n[i] === 3) {
            break;
        } 
        else {
            console.log("loop is running");
        }
    }
}

// Example usage:
num();