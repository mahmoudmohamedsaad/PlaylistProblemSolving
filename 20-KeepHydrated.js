function Liters(time){
    let L = 0.5;
    let calcL = Math.floor(time * L);
    return time = Number ? calcL : "Nan";
}
console.log(Liters(3));
console.log(Liters(6.7));
console.log(Liters(11.8));

/*anther solution
Math.floor(time/2);
When he drinks 0.5 L /H then He drinks 0.5 * Time
*/