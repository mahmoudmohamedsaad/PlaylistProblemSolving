function removeElement(arr){
    //let newArr =[];
    //for(let i = 0 ; i<= arr.length ; i++){
        //if(i % 2 === 0){
        //    newArr.push(arr[i]);
            
      //  }
    //}
    //return newArr;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 !== 0) {
            arr.splice(i, 1);
        }
    }
    return arr;
}
console.log(removeElement(["Keep","Remove" , "Keep","Remove" , "Keep","Remove"]));