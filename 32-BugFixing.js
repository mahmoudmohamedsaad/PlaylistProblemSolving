function createArr(num){
    var newArr =[];
    for(var counter = 1 ; counter <= num; counter++){
        newArr.push(counter);
    }
    return newArr;
}
console.log(createArr(1));
console.log(createArr(2));
console.log(createArr(3));
console.log(createArr(4));
console.log(createArr(5));
