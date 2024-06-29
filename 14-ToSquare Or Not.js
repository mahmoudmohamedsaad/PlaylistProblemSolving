// even index or i =0 take the sqrt of this num[i];
//odd index take the square of this num[i]
function squareOrSquareRoot(array) {
    return array.map(number => {
        let sqrt = Math.sqrt(number);
        if (Number.isInteger(sqrt)) {
            // If the square root is an integer, it's a perfect square
            return sqrt;
        } else {
            // Otherwise, square the number
            return number * number;
        }
    });
}

// Example usage:
let numbers = [4, 3, 9, 7, 2, 16, 25];
let transformed = squareOrSquareRoot(numbers);
console.log(transformed);  // Output: [2, 9, 3, 49, 4, 4, 5]


