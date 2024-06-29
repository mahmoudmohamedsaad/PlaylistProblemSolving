function countPositivesSumNegatives(arr) {
    if (!arr || arr.length === 0) {  // Check for empty or null input
        return [];
    }
    
    let positiveCount = 0;
    let negativeSum = 0;
    
    for (let num of arr) {
        if (num > 0) {
            positiveCount += 1;
        } else if (num < 0) {
            negativeSum += num;
        }
    }
    
    return [positiveCount, negativeSum];
}

// Example usage
const inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
const result = countPositivesSumNegatives(inputArray);
console.log(result);  // Output should be [10, -65]