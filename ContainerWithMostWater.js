var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1;
    let maxWater = 0;

    while (left < right) {
     
        const width = right - left;

       
        const currentWater = Math.min(height[left], height[right]) * width;

      
        maxWater = Math.max(maxWater, currentWater);

      
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxWater;
};

const digitvalue=maxArea([2,4,7,3,2,4])
console.log(digitvalue)