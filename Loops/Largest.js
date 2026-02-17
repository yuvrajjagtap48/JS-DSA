function findLargest(arr) {
    let largest = -Infinity; //INT_MIN => -Infinity   //used check for all negative number in array
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest){
        largest = arr[i];
    }
  }
  return largest;
}

let arr = [-7, -4, -5, -2];
let result = findLargest(arr);
console.log(result);



// Smallest numebr in array

function findSmallest(arr2) {
    let smallest = Infinity; //INT_MAX => Infinity   //used check for all negative number in array
    for (let i = 0; i < arr2.length; i++) {
      if (arr2[i] < smallest){
        smallest = arr2[i];
    }
  }
  return smallest;
}

let arr2 = [-7, -4, -5, -2];
let result2 = findSmallest(arr2);
console.log(result2);
