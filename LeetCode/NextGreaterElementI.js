function grate(nums1, arr) {
    let ngeMap = {};
    let stack = [];
    let n = arr.length;

    stack.push(arr[n-1]);  // Push the last element onto the stack
    ngeMap[arr[n-1]] = -1;  // The next greater element for the last element is -1
  
    for(let i = n-2; i >= 0; i--){
            while(stack.length){
                if(stack[stack.length - 1] < arr[i]){
                    stack.pop();
                }
                else{
                    ngeMap[arr[i]] = stack[stack.length - 1];
                    break;
                }
            }
            if(stack.length === 0){
                ngeMap[arr[i]] = -1;
            }
        stack.push(arr[i]);
    }
    return nums1.map(x => ngeMap[x]);
}


const nums1 = [4, 1, 2];
const arr = [1, 3, 4, 2];
console.log(grate(nums1, arr)); 

