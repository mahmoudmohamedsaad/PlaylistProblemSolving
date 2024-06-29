function bonusTime(salary , bonus){
    //if (bonus == true){
      //  return `E ${salary*10}` 
    //}else{
      //  return `E ${salary}`
    //}
    return bonus  ? `E ${salary*10}` :`E ${salary}`
}
console.log(bonusTime(10000,false))