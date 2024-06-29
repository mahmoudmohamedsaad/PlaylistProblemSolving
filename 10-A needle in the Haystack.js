function findNeedle(array){
    //for(let i =0;i<=array.length;i++){
        //if(array[i] === "needle"){
        //    return "found the needle";
      //  }
    //}
    return "found the needle " + array.indexOf('needle');
}
console.log(findNeedle(["dsad","needle"]))