//calculate the cost of days rant car ====> on the day pay = 40$ 
//if num of days rant is 7 or more discount 50$ of the cost
// if num of days rant is 3 or more discount 20$ of the cost
//return the total cost

function rentCarCost(d){
    
    let totalCost = d*40;
    if(d>=3 && d <7){
        return totalCost - 20; 
    }else if(d>=7){
        return totalCost - 50;
    }else{
        return totalCost;
    }
}
console.log(rentCarCost(1));
console.log(rentCarCost(3));
console.log(rentCarCost(7));