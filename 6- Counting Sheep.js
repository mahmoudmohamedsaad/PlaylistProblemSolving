// initial value = 0
//maping on this array
//adding the count to 1


function sheepCounter(array){
    let counter = 0;
    array.map((m)=>{
        if(m===true)counter++;
    });
    return counter;
}
console.log(sheepCounter([false]))