// array = null => 0
// find max Num
// find Min Num
// filter array from amx and min
//sum the nums of array 
//important note : must remove one max and min item of array
function sumArray(array){
    if(array == null)  return 0; 
    return array.sort((a,b)=>a-b).slice(1,-1).reduce((acc,current)=>acc+current,0);
        //return array
        //.filter((x)=> x !== Math.max(...array) && x !== Math.min(...array))
        //.reduce((acc,current)=>acc+current,0);
    ;
}
console.log(sumArray([1,1,2,3,,10,12,4,5,6]));