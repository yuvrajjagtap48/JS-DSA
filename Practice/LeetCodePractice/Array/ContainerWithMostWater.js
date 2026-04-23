function container(height){
    let maxArea = 0;
    let i = 0;
    let j = height.length - 1;
    while(i < j){
        let area = Math.min(height[i], height[j]) * (j - i);
        maxArea = Math.max(maxArea, area);
        if(height[i] < height[j]){
            i++;
        }
        else{
            j--;
        }
    }
    return maxArea;
}
let height = [1,5,3,2,1,3,6];
console.log(container(height)); 

