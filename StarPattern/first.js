// let n = 4;
// for(let i = 0; i < n; i++){
//     let row = " ";
//     for(let j = 0; j < i+1; j++){           // for(let j=0; j<=i; j++)
//         row = row + "*";
//     }
//     console.log(row);
// }

// let n = 4;
// for(let i = 0; i < n; i++){
//     let row = " ";
//     for(let j = 0; j < i+1; j++){
//         row = row + (j+1);
//     }
//     console.log(row);
// }

// reverse   ---------
// let n = 5;
// for(let i = 0; i < n; i++){
//     let row = " ";
//     for(let j = 0; j < n-i; j++){
//         row = row + (j+1);
//     }
//     console.log(row);
// }

// let n = 5;
// for(let i = 0; i < n; i++){
//     let row = " ";
//     for(let j = 0; j < n-i; j++){
//         row = row + "*";
//     }
//     console.log(row);
// }

//     *
//    **
//   ***
//  ****
// *****
// let n = 5;
// for(let i = 0; i < n; i++){
//     let row = " ";
//     for(let j = 0; j < n-i+1; j++){
//         row = row + " ";
//     }
//     for(let k = 0; k < i+1; k++){
//         row = row + "*";
//     }
//     console.log(row);
// }

// 1
// 1 0
// 1 0 1
// 1 0 1 0
// 1 0 1 0 1

// let n = 5;

// for (let i = 0; i < n; i++) {
//   let row = "";
//   let toggle = 1;
//   for (let j = 0; j < i + 1; j++) {
//     row = row + toggle;

//     // switch toggle
//     if (toggle == 1) {
//       toggle = 0;
//     } else {
//       toggle = 1;
//     }
//   }
//   console.log(row);
// }


// 1 
// 0 1
// 0 1 0
// 1 0 1 0
// 1 0 1 0 1

let n = 5;
let toggle = 1;

for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + toggle;

    // switch toggle
    if (toggle == 1) {
      toggle = 0;
    } else {
      toggle = 1;
    }
  }
  console.log(row);
}
