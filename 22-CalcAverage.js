function findAverage(arr){
    if(arr === null || arr.length === 0) return 0;
    let sum = arr.reduce((acc,curr)=>acc + curr, 0)
    let Avg = sum/ arr.length
    return Avg;
}
console.log(findAverage([]));
