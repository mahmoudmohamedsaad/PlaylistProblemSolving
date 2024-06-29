function countByX(step, limit) {
    const result = [];
    for (let i = step; i <= limit; i += step) {
        result.push(i);
    }
    return result;
}

// Example usage:
const numbers = countByX(2, 10);
console.log(numbers);  