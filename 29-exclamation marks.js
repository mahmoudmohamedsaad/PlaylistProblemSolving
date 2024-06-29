function remove(str){
    //if(str.endsWith('!')){
      //  return str.slice(0,-1);
    //}else{
    //return str;
    //}
    return str.replace(/!$/,"")
}
console.log(remove("!ST!!R!"))