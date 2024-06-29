function getAverage (marks){
    return ~~(marks.reduce(((curr , acc)=> curr+acc),0)/ marks.length);
}
console.log(getAverage([]));
console.log(getAverage([2,2,2,2]));
console.log(getAverage([1,2,3,4,5]));
console.log(getAverage([1,1,1,1,1,1,1,2]));