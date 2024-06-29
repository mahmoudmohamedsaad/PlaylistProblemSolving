function doubleChar(str){
    //let doubleStr = ''
    //for (let i =0 ; i < str.length ; i++ ){
    //    doubleStr += str[i] + str[i]
    //}
    //return doubleStr;
    return str.split('').map((s)=>s.repeat(2)).join('')
}
console.log(doubleChar("Hello World "))