//must the arr include 2 nums
//check the nums of arrs are consecutive return null
//else return the non consecutive nums

function firstNonConsecutive(arr){
    for(let i = 1 ;i < arr.length ; i++){
        if(arr[i] - arr[i - 1] >= 2){
            return arr[i]; 
        }
    }
    return null;
}
console.log(firstNonConsecutive([1,2,3,6,8,10]))