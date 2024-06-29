function arePlayBanjo(name){
    //return name.startsWith("R") || name.startsWith("r") ? name + " plays banjo" : name + " does not play banjo";
    
        if(name.startsWith("R") || name.startsWith("r")){
            return `${name} plays banjo`
        }else{
            return `${name} does not play banjo` 
        }
}
console.log(arePlayBanjo("re"));