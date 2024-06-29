// initValue = 0;
//ArrayLoop 
//check if the number is positive or not 
//add the number to the initValue if positive


function sumPositive(arr){
    return arr.filter((x) => x> 0).reduce((acc,current) => acc + current , 0);
    //let initValue = 0;
    //for (i=0;i<= arr.length;i++){
      //  if (arr[i] > 0 ){
        //    initValue += arr[i];
        //}
    //}
    //return initValue;
}
console.log(sumPositive([1,-1,-5,10]))